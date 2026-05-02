const Utilities = {
  count: 0,
  fps: 60,
  fn: null,
  handler: {},
  Sleep: (t) => new Promise((r) => setTimeout(r, t)),
  async LoadHTML(_html, _width, _height) {
    let url = location.href;
    let arr = url.split("/");
    let str = arr[arr.length - 1];
    url = url.replace(str, "") + _html;
    console.log(url);
    let subwin;
    await new Promise((r) => {
      subwin = window.open(
        url,
        _html,
        "width=" + _width + ",height=" + _height,
      );
      subwin.addEventListener("load", r);
    });
    return subwin;
  },
  async AnimsLoopn(_fps, _fn) {
    let _c = 0;
    _fps = 0;
    let hand = {};
    let loop = async function () {
      // console.log("loop "+hand);
      if (_c < _fps) {
        _c += 1;
      } else {
        _c = 0;
        let flg = await _fn();
        // console.log(flg);
        if (!flg) {
          return;
        }
      }
      hand.id = requestAnimationFrame(loop);
    };
    hand.id = requestAnimationFrame(loop);
    // console.log("first "+hand);
    return hand;
  },
  CancelAnimsLoopn(id) {
    console.log("cancel id : " + id);
    cancelAnimationFrame(id);
  },
  AnimsLoop() {
    // console.log("count :  "+Utilities.count+"   fps : "+ Utilities.fps);
    if (Utilities.count < Utilities.fps) {
      Utilities.count += 1;
    } else {
      // console.log(fn);
      Utilities.fn();
      Utilities.count = 0;
    }
    handler.id = window.requestAnimationFrame(Utilities.AnimsLoop);
  },
  async AnimsLoopStart(_fps, _fn) {
    Utilities.fps = _fps;
    Utilities.fn = _fn;
    console.log(_fps, _fn);
    window.requestAnimationFrame(Utilities.AnimsLoop);
  },
};
