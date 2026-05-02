Blockly.JavaScript['save_orientation_list'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  let save = `
      // タッチセンサの値の取得
      touch_x = (touchX);
      touch_y = (touchY) - 80;

      if (!(start_touch_flag) || !(end_touch_flag)) {
        await Canvas.ClearCanvas();
      }
      if (!(start_touch_flag)) { // センサの値の取得の開始処理
        draw_ball('blue', window.innerWidth / 2, window.innerHeight / 2, touch_circle_radius);// 円の描画
        context.fillStyle = 'white';// 説明の描画
        context.font = "bold " + explain_size + "px 'ＭＳ ゴシック'";
        context.fillText("青い円を押すと傾きセンサと加速度センサの", window.innerWidth / 20, window.innerHeight / 4);
        context.fillText("値の保存を開始します。", window.innerWidth / 20, window.innerHeight / 4 + window.innerWidth / 20);
        if (Math.sqrt(Math.pow(touch_x - window.innerWidth / 2, 2) + Math.pow(touch_y - window.innerHeight / 2, 2)) < touch_circle_radius) { // 円の範囲内か調べる
          start_touch_flag = true;
          touchX = 0; // タッチセンサの座標をリセット
          touchY = 0;
        }
      }
      else if (!(end_touch_flag)) { // センサの値の取得の終了処理
        // ジャイロセンサのx, y方向の値を取得する
        orientation_list.push([(orientation.x), (orientation.y)]);
        // 加速度センサのx, y, z方向の値を取得する
        hig_list.push([(parameter.x.hig), (parameter.y.hig), (parameter.z.hig)]);
        draw_ball('blue', window.innerWidth / 2, window.innerHeight / 2, touch_circle_radius);// 円の描画
        context.fillStyle = 'white';// 説明の描画
        context.font = "bold " + explain_size + "px 'ＭＳ ゴシック'";
        context.fillText("青い円を押すと傾きセンサの値の", window.innerWidth / 20, window.innerHeight / 4);
        context.fillText("保存を終了します。", window.innerWidth / 20, window.innerHeight / 4 + window.innerWidth / 20);
        // ボールの描画
        ball_coordinate[0] += (orientation.y);
        ball_coordinate[1] += (orientation.x);
        ball_coordinate = check_ball_coordinate(ball_coordinate);
        draw_ball('green', ball_coordinate[0], ball_coordinate[1], 50);
        if (Math.sqrt(Math.pow(touch_x - window.innerWidth / 2, 2) + Math.pow(touch_y - window.innerHeight / 2, 2)) < touch_circle_radius) { // 円の範囲内か調べる
          end_touch_flag = true;
          await Canvas.ClearCanvas();
        }
      }
      else if (sensor_count < orientation_list.length - 1) { // センサの値を取得した後の処理
        // ジャイロセンサのx, y方向の値を代入する
        orientation_x = orientation_list[sensor_count][0];
        orientation_y = orientation_list[sensor_count][1];
        // 加速度センサのx, y, z方向の値を代入する
        hig_x = hig_list[sensor_count][0];
        hig_y = hig_list[sensor_count][1];
        hig_z = hig_list[sensor_count][2];
        // センサのインデックスを1増やす
        sensor_count += 1;
      }
      else { // 図形の描画を終えた後の処理
        orientation_x = 0;
        orientation_y = 0;
        hig_x = 0;
        hig_y = 0;
        hig_z = 0;
      }
      `;

  var code = save;
  return code;
};