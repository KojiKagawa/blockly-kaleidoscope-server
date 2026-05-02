Blockly.JavaScript["define_variable_function"] = function (block) {
  // TODO: Assemble JavaScript into code variable.
  var code = `
  var center_x = window.innerWidth / 2; // 画面の中心のx座標
  var center_y = window.innerHeight / 2; // 画面の中心のy座標
  var current_coordinate_list = []; // 図形の座標のリスト
  var slope_list = [Math.sqrt(3), 0, -Math.sqrt(3), Math.sqrt(3), 0, -Math.sqrt(3)]; // 鏡の直線の傾き
  var radius = 50; // 円の半径
  var initial_coordinate_list = []; // 初期位置のリスト
  var SHAPE_NUM = 100; // 図形の数
  var shape_count = 0; // n番目の図形
  var friction_list = []; // 摩擦係数のリスト
  var orientation_x = 0; // 傾きセンサの値を保存する
  var orientation_y = 0;
  var orientation_list = []; // 傾きセンサの値を保存するリスト
  var sensor_count = 0; // センサを保存しているリストのn番目のインデックス
  var ball_coordinate = [window.innerWidth / 2, window.innerHeight / 2]; // ボールの初期座標のリスト
  var loop_num = 0; // 繰り返し回数を保存する
  var touch_x = window.innerWidth;// タッチセンサのx座標
  var touch_y = window.innerHeight;// タッチセンサのy座標
  var explain_size =  window.innerWidth / 20; // 説明テキストの文字のサイズ
  var touch_circle_radius = window.innerWidth / 5; // タッチする円の半径
  var start_touch_flag = false; // タッチセンサの開始・終了フラグ
  var end_touch_flag = false; // タッチセンサの開始・終了フラグ
  var add_Hue = 0; // 色相を変化させる量
  var add_Saturation = 0; // 彩度を変化させる量
  var add_Value = 0; // 明度を変化させる量
  var shape_color_list = []; // 図形の色を保存するリスト
  var color_interval_time = 0; // 色を変えるインターバル時間
  var hig_list = []; // 加速度センサの値を保存するリスト
  var hig_x = 0; // x軸の加速度
  var hig_y = 0; // y軸の加速度
  var hig_z = 0; // z軸の加速度
  var hig_x_threshold = 0; // x軸の加速度のしきい値
  var hig_y_threshold = 0; // y軸の加速度のしきい値
  var hig_z_threshold = 0; // z軸の加速度のしきい値
  var changed_color_time = 0; // 図形の色を変えた時間

  // 初期座標をSHAPE_NUM個生成
  for (var i=0; i < SHAPE_NUM; i++) {
    initial_coordinate_list.push(get_center_coordinate());
  }

  // 摩擦係数をSHAPE_NUM個生成
  for (var i=0; i < SHAPE_NUM; i++) {
    friction_list.push(get_friction());
  }

  // 図形の中心角を求める関数
  function get_angle(isshape) {
    var angle;
    switch (isshape) {
      case 'triangle' : angle = [90, 210, 330]; break;
      case 'quadrangle' : angle = [45, 135, 225, 315];  break;
      case 'pentagon' : angle = [90, 162, 234, 306, 378];  break;
      case 'hexagon' : angle = [60, 120, 180, 240, 300, 360];  break;
      case 'star' : angle = [90, 306, 162, 378, 234];  break;
      default : angle = [];
    }
    return angle;
  }

  // 図形の中心となる座標の初期位置を決定する関数
  function get_center_coordinate() {
    var center_coordinate = [0.0, 0.0]; // 初期位置のリスト
    // 乱数で初期位置を生成
    center_coordinate[1] = Math.floor(Math.random() * -center_y); // Y座標の初期値：0~-center_y-1
    center_coordinate[0] = Math.floor(Math.random() * (center_coordinate[1] / -Math.sqrt(3) - center_coordinate[1] / Math.sqrt(3))) + Math.floor(center_coordinate[1] / Math.sqrt(3)); // X座標の初期：y/√3~y/-√3
    // 初期位置をキャンバスの中心に向かって平行移動
    center_coordinate[0] += center_x;
    center_coordinate[1] = -(center_coordinate[1] - center_y);
    
    return center_coordinate;
  }

  // 図形の中心座標と中心角から各頂点の座標を取得する関数
  function get_shape_coordinate(center_coordinate, angle) {
    var coordinate_list = [];
    var x, y, radian;

    // 図形の中心座標と中心角から各頂点の座標を求める
    for (var i = 0; i < angle.length; i++) {
      radian = angle[i] * Math.PI / 180;
      x = radius * Math.cos(radian) + Number(center_coordinate[0] - center_x);
      y = radius * Math.sin(radian) - Number(center_coordinate[1] - center_y);
      coordinate_list.push([x, y]);
    }

    return coordinate_list;
  }

  // 図形を線対称移動させる関数
  function move_coordinate(current_coordinate_list, slope) {
    var a, b;
    var next_coordinate_list = [];
    
    // 図形を線対称移動した後の座標を求める
    for (var j = 0; j < current_coordinate_list.length; j++) { // 線対称移動する座標の数だけ繰り返す
      a = -1 * ((Math.pow(slope, 2) - 1) * (current_coordinate_list[j][0]) - 2 * slope * (current_coordinate_list[j][1])) / (Math.pow(slope, 2) + 1);
      b = -1 * (-2 * slope * (current_coordinate_list[j][0]) + (1 - Math.pow(slope, 2)) * (current_coordinate_list[j][1])) / (Math.pow(slope, 2) + 1);
      next_coordinate_list.push([a, b]);
    }

    return next_coordinate_list;
  }

  // 図形の座標がはみ出さないようにする関数
  // prev_coordinate = [x, y];
  function check_coordinate(prev_coordinate) {
    var correct_coordinate = prev_coordinate;

    if (prev_coordinate[1] < center_y) // y座標が鏡の上端を超えた場合
      correct_coordinate[1] = center_y;
    else if(prev_coordinate[1] > center_y * 2) // y座標が鏡の下端を超えた場合
      correct_coordinate[1] = center_y * 2;
    if((prev_coordinate[0] <= center_x) && ((prev_coordinate[0] - center_x) < -(prev_coordinate[1] - center_y) / Math.sqrt(3))) // x座標が左の鏡を超えた場合
      correct_coordinate[0] = -(prev_coordinate[1] - center_y) / Math.sqrt(3) + center_x;
    else if((center_x < prev_coordinate[0]) && ( -(prev_coordinate[1] - center_y) / -Math.sqrt(3) < (prev_coordinate[0] - center_x))) // x座標が右の鏡を超えた場合
      correct_coordinate[0] = -(prev_coordinate[1] - center_y) / -Math.sqrt(3) + center_x;

    return correct_coordinate;
  }

  // 図形の摩擦係数を乱数で作る関数
  function get_friction() {
    return (Math.floor(Math.random() * (101 - 10)) + 10) / 100; // 0.1 ~ 1.00
  }

  // 図形を描画する関数
  function draw_shape(fill_color, stroke_color, isshape, center_coordinate, friction, current_coordinate_list, isfill, length, height) {
    // Blocklyのブロックで選択した図形の中心角を保存する
    var angle = get_angle(isshape);
    // 図形の中心座標をジャイロセンサで取得した値の方向に移動させる
    center_coordinate[0] += orientation_y * friction;
    center_coordinate[1] += orientation_x * friction;
    // 図形の中心座標が鏡からはみ出してないかチェックする
    center_coordinate = check_coordinate(center_coordinate);
    // 図形の中心座標と中心角から図形の各頂点の座標を取得する
    current_coordinate_list = get_shape_coordinate(center_coordinate, angle);
    // 図形の縦と横の倍率を変える
    current_coordinate_list = reshape(center_coordinate, current_coordinate_list, length, height);

    // HTMLのCanvas機能で図形の各頂点を図形を結んで図形を描画する
    context.beginPath();
    context.fillStyle = fill_color;
    context.strokeStyle = stroke_color;
    for (var i = 0; i < 6; i++) {
      for (var j = 0; j < current_coordinate_list.length; j++) {
        if (j == 0)
          context.moveTo(current_coordinate_list[j][0] + center_x, -current_coordinate_list[j][1] + center_y);
        else 
          context.lineTo(current_coordinate_list[j][0] + center_x, -current_coordinate_list[j][1] + center_y);
      }
      eval(isfill);
      context.closePath();
      // 線対称移動後の図形の各頂点の座標を求める
      current_coordinate_list = move_coordinate(current_coordinate_list, slope_list[i]);
    }
    // 現在描画している図形の番号を1増やす
    shape_count += 1;
  }

  // 図形の縦と横の倍率を変える関数
  function reshape(center_coordinate, current_coordinate_list, length, height) {
    // 図形の縦と横の倍率を変えた後の各頂点の座標のリスト
    var resize_coordinate_list =  current_coordinate_list;

    // 図形の縦と横の倍率を変える
    for (var i = 0; i < current_coordinate_list.length; i++) {
      resize_coordinate_list[i][0] = ((current_coordinate_list[i][0] + center_x) - center_coordinate[0]) * length + (center_coordinate[0] - center_x);
      resize_coordinate_list[i][1] = ((-current_coordinate_list[i][1] + center_y) - center_coordinate[1]) * height + (center_coordinate[1] - center_y);
    }

    return resize_coordinate_list;
  }

  // ジャイロセンサのボールの中心座標が画面からはみ出さないようにする関数
  function check_ball_coordinate(prev_coordinate) {
    // 修正後のボールの中心座標<br>[x', y']
    var correct_coordinate = prev_coordinate;
    
    if (prev_coordinate[0] < 0) // x座標が画面の左端を超えた場合
      correct_coordinate[0] = 0;
    else if (prev_coordinate[0] > window.innerWidth) // x座標が画面の右端を超えた場合
      correct_coordinate[0] = window.innerWidth;
    if (prev_coordinate[1] < 0) // y座標が画面の上端を超えた場合
      correct_coordinate[1] = 0;
    else if (prev_coordinate[1] > window.innerHeight) // y座標が画面の下端を超えた場合
      correct_coordinate[1] = window.innerHeight;

    return correct_coordinate;
  }

  // 円(ボール)を描画する関数
  function draw_ball(ball_color, ball_coordinate_x, ball_coordinate_y, ball_radius) {
    context.fillStyle = ball_color;  // 塗りつぶしの色
    context.beginPath();
    context.arc(ball_coordinate_x, ball_coordinate_y, ball_radius, 0, 2 * Math.PI, false);
    context.fill();
  }

  // HSVを計算する関数
  // RGB = '#ffffff'
  // num = sensor_count
  function change_HSV(RGB, current_time) {
    var H, S, V; // 色相H(0 ~ 360), 彩度S(0 ~ 255), 明度V(0 ~ 255)
    var R, G, B; // 赤R, 緑G, 青B
    var MAX, MIN; // RGB値とHSV値の最大値と最小値
    var translated_RGB; // 変換後のRGB

    // R, G, Bを取得する
    R = parseInt(RGB.substr(1, 2), 16);
    G = parseInt(RGB.substr(3, 2), 16);
    B = parseInt(RGB.substr(5, 2), 16);
    // RGB値の最大値と最小値を取得する
    MAX = Math.max(R, G, B);
    MIN = Math.min(R, G, B);
    
    // RGBをHSVに変換する
    // 色相を求める
    if(R == G && G == B) { // 3つとも同じ値の場合 色相 H = 0
      H = 0;
    }
    else if(R == MAX) { // Rが最大値の場合 色相 H = 60 * ((G - B) ÷ (MAX - MIN))
      H = 60 * ((G - B) / (MAX - MIN));
    }
    else if(G == MAX) { // Gが最大値の場合 色相 H = 60 * ((B - R) ÷ (MAX - MIN)) +120
      H = 60 * ((B - R) / (MAX - MIN)) + 120;
    }
    else if(B == MAX) { // Bが最大値の場合 色相 H = 60 * ((R - G) ÷ (MAX - MIN)) +240
      H = 60 * ((R - G) / (MAX - MIN)) + 240;
    }
    // 彩度を求める
    S = ((MAX - MIN) / MAX) * 255;
    // 明度を求める
    V = MAX;

    // x軸の加速度センサの値がしきい値を超えた場合、色相を変化させる
    if ((changed_color_time + color_interval_time < current_time) || (changed_color_time == current_time)) {
      if (Math.abs(hig_x) > hig_x_threshold) {
        H = (H + add_Hue) % 360;
        changed_color_time = current_time;
      }
    }
    // 色相がマイナスの場合、360を加算して範囲内に収める
    if (H < 0) {
      H = H + 360;
    }

    // y軸の加速度センサの値がしきい値を超えた場合、彩度を変化させる
    if ((changed_color_time + color_interval_time < current_time) || (changed_color_time == current_time)) {
      if (Math.abs(hig_y) > hig_y_threshold) {
        S = (S + add_Saturation) % 256;
        changed_color_time = current_time;
      }
    }
    // 彩度がマイナスの場合、255を加算して範囲内に収める
    if (S < 0) {
      S = S + 255;
    }

    // z軸の加速度センサの値がしきい値を超えた場合、明度を変化させる
    if ((changed_color_time + color_interval_time < current_time) || (changed_color_time == current_time)) {
      if (Math.abs(hig_z) > hig_z_threshold) {
        V = (V + add_Value) % 256;
        changed_color_time = current_time;
      }
    }
    // 明度がマイナスの場合、255を加算して範囲内に収める
    if (V < 0) {
      V = V + 255;
    }

    // HSVを変化させた後の最大値と最小値を求める
    MAX = V;
    MIN = MAX - ((S / 255) * MAX);

    // HSVをRGBに戻す
    if (0 <= H && H < 60) { // Hが0~60の場合
      R = MAX;
      G = (H / 60) * (MAX - MIN) + MIN;
      B = MIN;
    }
    else if(60 <= H && H < 120) { // Hが60~120の場合
      R = ((120 - H) / 60) * (MAX - MIN) + MIN;
      G = MAX;
      B = MIN;
    }
    else if(120 <= H && H < 180) { // Hが120~180の場合
      R = MIN;
      G = MAX;
      B = ((H - 120) / 60) * (MAX - MIN) + MIN;
    }
    else if(180 <= H && H < 240) { // Hが180~240の場合
      R = MIN;
      G = ((240 - H) / 60) * (MAX - MIN) + MIN;
      B = MAX;
    }
    else if(240 <= H && H < 300) { // Hが240~300の場合
      R = ((H - 240) / 60) * (MAX - MIN) + MIN;
      G = MIN;
      B = MAX;
    }
    else if(300 <= H && H < 360) { // Hが300~360の場合
      R = MAX;
      G = MIN;
      B = ((360 - H) / 60) * (MAX - MIN) + MIN;
    }

    // R, G, Bをカラーコードに戻す
    // R, G, Bを整数にする
    R = Math.floor(R); 
    G = Math.floor(G);
    B = Math.floor(B);
    // R, G, Bを16進数の2桁の文字列にする
    R = R.toString(16).padStart(2, '0');
    G = G.toString(16).padStart(2, '0');
    B = B.toString(16).padStart(2, '0');
    // カラーコードの文字列を作る
    translated_RGB = '#' + R + G + B;

    return translated_RGB;
  }
  
  `;

  return code;
};
