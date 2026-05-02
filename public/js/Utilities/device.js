var rad = Math.PI / 180;
var touchX;
var touchY;
const orientations = [
  ["landscape left", "landscape right"], // device x axis points up/down
  ["portrait", "portrait upside down"], // device y axis points up/down
  ["display up", "display down"], // device z axis points up/down
];
var _ort;
class CencerData {
  constructor() {
    this.value_x = 0;
    this.value_y = 0;
    this.value_z = 0;
    this.list_x = [];
    this.list_y = [];
    this.list_z = [];
    this.xn = 0;
    this.yn = 0;
    this.zn = 0;
  }
  get x() {
    if (navigator.userAgent.match(/(iPhone|iPad|iPod|Android|Mobile)/i)) {
      // スマートフォン
      // 検出値を記録 返却
      this.list_x.push(this.value_x);
      return this.value_x;
    } else {
      // PC
      // 検出値を記録から読み込み、返却
      console.log("list_x[" + this.xn + "]", this.list_x[this.xn]);
      return this.list_x[this.xn++];
    }
  }
  get y() {
    if (navigator.userAgent.match(/(iPhone|iPad|iPod|Android|Mobile)/i)) {
      this.list_y.push(this.value_y);
      return this.value_y;
    } else {
      return this.list_y[this.yn++];
    }
  }
  get z() {
    if (navigator.userAgent.match(/(iPhone|iPad|iPod|Android|Mobile)/i)) {
      this.list_z.push(this.value_z);
      return this.value_z;
    } else {
      return this.list_z[this.zn++];
    }
  }
  static reset() {
    this.xn = 0;
    this.yn = 0;
    this.zn = 0;
  }
}

const SmartDevice = {
  ortEvent: null,
  accEvent: null,
  posEvent: null,
  myid: null,
  orientation: null,
  async InitSensor() {
    if (
      navigator.userAgent.match(/(iPhone|iPad|iPod)/i) ||
      (typeof DeviceMotionEvent.requestPermission === "function" &&
        typeof DeviceOrientationEvent.requestPermission === "function")
    ) {
      if (
        DeviceMotionEvent &&
        DeviceMotionEvent.requestPermission &&
        typeof DeviceMotionEvent.requestPermission === "function"
      ) {
        DeviceMotionEvent.requestPermission();
      }
      if (
        DeviceOrientationEvent &&
        DeviceOrientationEvent.requestPermission &&
        typeof DeviceOrientationEvent.requestPermission === "function"
      ) {
        DeviceOrientationEvent.requestPermission();
      }
    }
    location.reload();
  },
  async InitOrientation(time) {
    // PC状態でセンサー初期処理を発火した際の処理
    if (!navigator.userAgent.match(/(iPhone|iPad|iPod|Android)/i)) {
      this.orientation.xn = 0;
      this.orientation.yn = 0;
      this.orientation.zn = 0;
      _ort = this.orientation;
      return this.orientation;
    }
    // スマホから
    let ort = new CencerData();
    await new Promise((r) => {
      let interval = time;
      let lastTime = new Date().getTime() - interval;
      ortEvent = function (e) {
        if (lastTime + interval <= new Date().getTime()) {
          lastTime = new Date().getTime();
          ort.value_x = e.beta;
          ort.value_y = e.gamma;
          ort.value_z = e.alpha;
          q = Quaternion.fromEuler(
            e.alpha * rad,
            e.beta * rad,
            e.gamma * rad,
            "ZXY",
          );
          let vec = q.conjugate().rotateVector([0, 0, 1]);
          let [value, axis] = vec.reduce(
            (acc, cur, idx) =>
              Math.abs(cur) < Math.abs(acc[0]) ? acc : [cur, idx],
            [0, 0],
          );
          let orientation = orientations[axis][1 * (value < 0)];
          if (r) r();
          r = null;
        }
      };
      window.addEventListener("deviceorientation", ortEvent, false);
    });
    this.orientation = ort;
    _ort = ort;
    return ort;
  },
  async RemoveOrientation() {
    window.removeEventListener("deviceorientation", ortEvent, false);
  },
  async InitAcceleration(time) {
    let ahoge = 0.1;
    let ort = this.orientation;
    let acc3 = {
      x: [0, 0, 0],
      y: [0, 0, 0],
      z: [0, 0, 0],
    };
    let range = 0.05;

    let filterCoefficient = 0.9;
    let timeSpan = 0.1;
    let evalParametern = function (acc, par, old, acc3) {
      // par.low = par.low * filterCoefficient + acc * (1 - filterCoefficient);
      // par.hig = acc - par.low;
      // par.hig = acc;

      acc3.shift();
      acc3.push(acc);
      par.hig = acc3.reduce((p, c) => p + c) / 3.0;
      if (
        Math.abs(par.hig) < range &&
        Math.max(...acc3) - Math.min(...acc3) < range
      ) {
        // par.spd = (Math.abs(par.spd)<range)?0:par.spd*9/10;
        par.hig = 0;
        par.spd = 0;
      } else {
        par.spd = ((par.hig + old.acc) * timeSpan) / 2 + par.spd;
        old.acc = par.hig;
        par.dif = ((par.spd + old.spd) * timeSpan) / 2 + par.dif;
        old.spd = par.spd;
      }
    };
    let acc = { x: 0, y: 0, z: 0 };
    let par = {
      x: { low: 0, hig: 0, spd: 0, dif: 0 },
      y: { low: 0, hig: 0, spd: 0, dif: 0 },
      z: { low: 0, hig: 0, spd: 0, dif: 0 },
    };
    let old = {
      x: { acc: 0, spd: 0 },
      y: { acc: 0, spd: 0 },
      z: { acc: 0, spd: 0 },
    };
    let flg = false;
    await new Promise((r) => {
      let interval = time;
      let lastTime = new Date().getTime() - interval;
      accEvent = function (e) {
        // console.log(lastTime, interval, new Date().getTime());
        if (lastTime + interval <= new Date().getTime()) {
          lastTime = new Date().getTime();
          acc.x = e.acceleration.x;
          acc.y = e.acceleration.y;
          acc.z = e.acceleration.z;
          ort = _ort;
          let q = Quaternion.fromEuler(
            ort.value_z * rad,
            ort.value_x * rad,
            ort.value_y * rad,
            "ZXY",
          );
          [_x, _y, _z] = q.rotateVector([acc.x, acc.y, acc.z]);
          acc.x = _x;
          acc.y = _y;
          acc.z = _z;
          //z : -360 ~ 0 表を上に時計が正
          //x : -180 ~ 180 手前側が負
          //y : -90 ~ 0 ~ 90 -90 ~ 0 ~ 90　上から見て時計が正
          evalParametern(acc.x, par.x, old.x, acc3.x);
          evalParametern(acc.y, par.y, old.y, acc3.y);
          evalParametern(acc.z, par.z, old.z, acc3.z);

          if (r) r();
          r = null;
        }
      };
      window.addEventListener("devicemotion", accEvent, false);
    });
    return par;
  },
  async RemoveAcceleration() {
    window.removeEventListener("devicemotion", accEvent, false);
  },

  async LogPosition() {
    if (window.addEventListener) {
      // ------------------------------------------------------------
      // タッチすると実行される関数
      // ------------------------------------------------------------
      posEvent = function (e) {
        // イベント名を出力
        //      			console.log("type:" + e.type);

        // TouchList オブジェクトを取得
        var touch_list = e.changedTouches;

        // 中身に順番にアクセス
        var i;
        var num = touch_list.length;
        for (i = 0; i < num; i++) {
          // Touch オブジェクトを取得
          var touch = touch_list[i];
          touchX = touch.pageX;
          touchY = touch.pageY;
        }

        // ------------------------------------------------------------
        // リッスンを開始する
        // ------------------------------------------------------------
        // タッチを開始すると実行されるイベント
      };
      window.addEventListener("touchstart", posEvent, false);

      // タッチしたまま平行移動すると実行されるイベント
      window.addEventListener("touchmove", posEvent, false);

      // タッチを終了すると実行されるイベント
      //      		document.addEventListener("touchend",TouchEventFunc);

      // タッチ操作を中断させる処理が発生すると実行されるイベント
      //      		document.addEventListener("touchcancel",TouchEventFunc);
    }
  },

  async SmartExec(loc) {
    this.myid = loc.search.slice(location.search.indexOf("id=") + 3);
    (async () => {
      let data = await fetch("./smartview/dataget?id=" + this.myid);
      let obj = await data.json();
      console.log("obj.prog : " + obj.prog);
      program = decodeURIComponent(escape(atob(obj.prog)));
      console.log("program : " + program);
      new Function("try{" + program + "}catch(e){alert(e);}")();
    })();
  },
  async ReturnData(type, data, option) {
    let obj = {
      id: this.myid,
      type: type,
      data: data,
    };
    obj = Object.assign(obj, option);
    let req = new Request("./smartview/finishaccept", {
      method: "POST",
      body: JSON.stringify(obj),
      headers: new Headers({ "Content-type": "application/json" }),
    });
    (async () => {
      let data = await fetch(req);
    })();
  },
  async ReturnCanvasImage() {
    let csv = document.getElementById("csv");
    let data = csv.toDataURL("image/png");
    data = encodeURIComponent(data);
    console.log("data : " + data);
    this.ReturnData("canvas", data, { width: csv.width, height: csv.height });
  },
  async ReturnCencerData() {
    if (!navigator.userAgent.match(/(iPhone|iPad|iPod|Android)/i)) {
      return;
    }
    let data = {
      orientation: {
        list_x: this.orientation.list_x,
        list_y: this.orientation.list_y,
        list_z: this.orientation.list_z,
      },
    };
    this.ReturnData("cencer", data);
  },
  async ReloadCencerData(data) {
    this.orientation = new CencerData();
    this.orientation.list_x = data.orientation.list_x;
    this.orientation.list_y = data.orientation.list_y;
    this.orientation.list_z = data.orientation.list_z;
  },
};
