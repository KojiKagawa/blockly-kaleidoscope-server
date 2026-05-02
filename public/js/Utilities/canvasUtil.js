console.log("read canvas util");
let obj_canvas = null;
let context = null;
let width = 0;
let height = 0;
let subdiv = null;

var __turtlePen = self.CLEAN; /* up: 0, down: 1, dirty: 2 */
var __turtleX = 148.5;
var __turtleY = 105;
var __turtleHeading = 0;
var __turtleStack = [];

const Canvas = {
  subwin: null,
  backcolor: null,
  color_fill: [0, 0, 0, 1.0],
  color_stroke: [0, 0, 0, 1.0],
  UP: 0,
  CLEAN: 1,
  DIRTY: 2,

  // キャンバスの生成(キャンバスウィンドウの生成)
  async CreateCanvas(_width, _height, _div, _color) {
    if (navigator.userAgent.match(/(iPhone|iPad|iPod|Android)/i)) {
      // スマホ・タブレット（iOS・Android）の場合の処理を記述
      this.subwin = window;
    } else {
      // PCの場合の処理を記述
      let url = location.href;
      let arr = url.split("/");
      let str = arr[arr.length - 1];
      url = url.replace(str, "") + "localcanvas.html";
      console.log(url);
      await new Promise((r) => {
        if (this.subwin != null || !this.subwin) {
          this.subwin = window.open(
            url,
            "canvas",
            "width=" +
              _width +
              ",height=" +
              _height +
              ",location=no,toolbar=no,menubar=no",
          );
          this.subwin.onbeforeunload = () => {
            // キャンバスウィンドウを閉じたときの処理(要実行停止)
            this.subwin = null;
          };
        }
        this.subwin.addEventListener("load", () => {
          this.subwin.resizeTo(_width + 50, _height + 100);
          r();
        });
      });
      console.log("sub : " + this.subwin);
    }
    // 今のhtmlがどっちか(pcサイドかスマホサイドか)でサブウィンドウを作るかどうか選択

    _div = this.subwin.document.getElementById("element");

    obj_canvas = this.subwin.document.createElement("canvas");
    obj_canvas.setAttribute("id", "csv");
    obj_canvas.width = width = _width;
    obj_canvas.height = height = _height;
    context = obj_canvas.getContext("2d");
    this.backcolor = _color;
    context.fillStyle = this.backcolor;
    context.fillRect(0, 0, width, height);
    console.log(this.subwin.document.getElementById("element"));
    _div.appendChild(obj_canvas);
  },
  // キャンバスの抹消
  async ClearCanvas() {
    context.clearRect(0, 0, width, height);
    // 再度背景描画
    context.fillStyle = this.backcolor;
    context.fillRect(0, 0, width, height);
    context.fillStyle = `rgba(${this.color_fill[0]},${this.color_fill[1]},${this.color_fill[2]},${this.color_fill[3]})`;
  },
  // 図形:点の描画
  async DrawPoint(x, y) {
    context.fillRect(x, y, 1, 1);
  },
  // 図形:線分の描画
  async DrawLine(x, y, x2, y2) {
    context.beginPath();
    context.moveTo(x, y);
    context.lineTo(x2, y2);
    context.closePath();
    context.stroke();
  },
  // 図形:長方形の描画
  async DrawRect(x, y, w, h, isfill) {
    context.strokeRect(x, y, w, h);
    if (isfill) {
      context.fillRect(x, y, w, h);
    }
  },
  // 図形:三角形の描画
  async DrawTriangle(x1, y1, x2, y2, x3, y3, isfill) {
    context.beginPath();
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);
    context.lineTo(x3, y3);
    context.closePath();
    context.stroke();
    if (isfill) {
      context.fill();
    }
  },
  // 図形:円の描画
  async DrawCircle(x, y, r, isfill) {
    context.beginPath();
    context.arc(x, y, r, (0 * Math.PI) / 180, (360 * Math.PI) / 180, false);
    context.stroke();
    if (isfill) {
      context.fill();
    }
  },
  // 図形:楕円の描画 (中心座標指定型)
  async DrawEllipse(cx, cy, w, h, isfill) {
    let ratio = h / w;
    let radius = w / 2;
    let increment = 1 / radius;
    context.beginPath();
    let x = cx + radius * Math.cos(0);
    let y = cy - ratio * radius * Math.sin(0);
    context.moveTo(x, y);
    for (let radians = increment; radians < Math.PI * 2; radians += increment) {
      x = cx + radius * Math.cos(radians);
      y = cy - ratio * radius * Math.sin(radians);
      context.lineTo(x, y);
    }
    context.closePath();
    context.stroke();
    if (isfill) {
      context.fill();
    }
  },
  // 図形:楕円の描画 (左上の座標指定型)
  async DrawEllipse2(x, y, w, h, isfill) {
    this.DrawEllipse(x + w / 2, y + h / 2, w, h, isfill);
  },
  // スタイル:塗りつぶしの色
  async StyleFillColor(_color) {
    [r, g, b] = Color(_color).rgbData();
    this.color_fill[0] = r;
    this.color_fill[1] = g;
    this.color_fill[2] = b;
    context.fillStyle = `rgba(${this.color_fill[0]},${this.color_fill[1]},${this.color_fill[2]},${this.color_fill[3]})`;
  },
  // スタイル:塗りつぶしの不透明度
  async StyleFillTransparent(_alpha) {
    this.color_fill[3] = _alpha;
    context.fillStyle = `rgba(${this.color_fill[0]},${this.color_fill[1]},${this.color_fill[2]},${this.color_fill[3]})`;
  },
  // スタイル:線の幅
  async StyleStrokeWide(_num) {
    context.lineWidth = _num;
  },
  // スタイル:線の色
  async StyleStrokeColor(_color) {
    [r, g, b] = Color(_color).rgbData();
    this.color_stroke[0] = r;
    this.color_stroke[1] = g;
    this.color_stroke[2] = b;
    context.strokeStyle = `rgba(${this.color_stroke[0]},${this.color_stroke[1]},${this.color_stroke[2]},${this.color_stroke[3]})`;
  },
  // スタイル:線の不透明度
  async StyleStrokeTransparent(_alpha) {
    this.color_stroke[3] = _alpha;
    context.strokeStyle = `rgba(${this.color_stroke[0]},${this.color_stroke[1]},${this.color_stroke[2]},${this.color_stroke[3]})`;
  },
  // スタイル:フォント
  async StyleFont(_font, _size) {
    context.font = "" + _size + "px " + _font;
  },
  // 色:色の変更
  async ColorChange(_color, h) {
    let hsl = Color(_color).hslData();
    return Color.hsl(hsl[0] + h / 360, hsl[1], hsl[2], hsl[3]).hexTriplet();
  },
  // 文字:文字の描画
  async DrawText(x, y, _text, isfill) {
    if (isfill) {
      context.fillText("" + _text, x, y);
    } else {
      context.strokeText("" + _text, x, y);
    }
  },
  async TranslateCanvas(x, y) {
    context.translate(x, y);
  },
  async RotateCanvas(r) {
    context.rotate(r);
  },
  async SaveContext() {
    context.save();
  },
  async RestoreContext() {
    context.restore();
  },
  /*
    async radians(deg) {
        return deg / 180 * Math.PI;
    },
    async cos360(deg) {
        return Math.cos(this.radians(deg));
    },
    async sin360(deg) {
        return Math.sin(this.radians(deg));
    },
    */
  async getX() {
    return __turtleX;
  },

  async getY() {
    return __turtleY;
  },

  async getAngle() {
    return __turtleHeading;
  },
  async penUp() {
    __turtlePen = this.UP;
  },
  async penDown() {
    __turtlePen = this.CLEAN;
  },
  async forward(len) {
    var dx = len * Math.cos((__turtleHeading / 180) * Math.PI);
    var dy = len * Math.sin((__turtleHeading / 180) * Math.PI);
    if (__turtlePen == this.CLEAN) {
      __turtlePen = this.DIRTY;
      /*
                    beginShape();
                    vertex(this.__turtleX, __turtleY);
            */
    }
    if (__turtlePen == this.DIRTY) {
      this.DrawLine(__turtleX, __turtleY, __turtleX + dx, __turtleY + dy);
      /*        vertex(__turtleX + dx, __turtleY + dy); */
    }
    __turtleX += dx;
    __turtleY += dy;
  },
  async go(x, y) {
    if (__turtleX != x || __turtleY != y) {
      if (__turtlePen == this.DIRTY) {
        this.penUp();
        __turtleX = x;
        __turtleY = y;
        this.penDown();
      } else {
        __turtleX = x;
        __turtleY = y;
      }
    }
  },
  async turn(angle) {
    var tmp;
    __turtleHeading += angle;

    tmp = Math.floor(__turtleHeading);
    __turtleHeading -= tmp;
    if (__turtleHeading < 0) {
      __turtleHeading += 1;
      tmp--;
    }
    tmp %= 360;
    if (tmp < 0) {
      tmp += 360;
    }
    __turtleHeading += tmp;
  },
  async direction(dir) {
    var tmp;
    __turtleHeading = dir;

    tmp = Math.floor(__turtleHeading);
    __turtleHeading -= tmp;
    if (__turtleHeading < 0) {
      __turtleHeading += 1;
      tmp--;
    }
    tmp %= 360;
    if (tmp < 0) {
      tmp += 360;
    }
    __turtleHeading += tmp;
  },
};
