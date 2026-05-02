Blockly.JavaScript['save_orientation_list'] = function(block) {
  var value_save_num = Blockly.JavaScript.valueToCode(block, 'save_num', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_issave = block.getFieldValue('issave');
  // TODO: Assemble JavaScript into code variable.
  let save;
  switch (dropdown_issave) {
    case 'save' :
      save = `
      // タッチセンサの値の取得
      touch_x = (touchX);
      touch_y = (touchY) - 80;

      if (!(start_touch_flag)) {
        await Canvas.ClearCanvas();
        draw_ball('blue', window.innerWidth / 2, window.innerHeight / 2, touch_circle_radius);// 円の描画
        context.fillStyle = 'white';// 説明の描画
        context.font = "bold " + explain_size + "px 'ＭＳ ゴシック'";
        context.fillText("青い円を押すと傾きセンサの値を", window.innerWidth / 20, window.innerHeight / 4);
        context.fillText("保存します。", window.innerWidth / 20, window.innerHeight / 4 + window.innerWidth / 20);
        if (Math.sqrt(Math.pow(touch_x - window.innerWidth / 2, 2) + Math.pow(touch_y - window.innerHeight / 2, 2)) < touch_circle_radius) { // 円の範囲内か調べる
          start_touch_flag = true;
          end_touch_flag = true;
        }
      } 
      else {
        loop_num = ${value_save_num};
        if (orientation_list.length < loop_num) {
          await Canvas.ClearCanvas();
          context.fillStyle = 'green';
          context.strokeStyle = 'white';
          context.font = "bold 100px 'ＭＳ ゴシック'";
          context.strokeText(orientation_list.length, window.innerWidth / 4, window.innerHeight / 2);
          orientation_list.push([(orientation.x), (orientation.y)]);
          orientation_x = 0;
          orientation_y = 0;

          // ボールの描画
          ball_coordinate_list[0] += (orientation.y);
          ball_coordinate_list[1] += (orientation.x);
          ball_coordinate_list = check_ball_coordinate(ball_coordinate_list);
          draw_ball('green', ball_coordinate_list[0], ball_coordinate_list[1], 50);

          if (orientation_list.length == loop_num)
            await Canvas.ClearCanvas();
        }
        else {
          if (orientation_count < loop_num) {
            orientation_x = orientation_list[orientation_count][0];
            orientation_y = orientation_list[orientation_count][1];
            orientation_count += 1;
          }
          else {
            orientation_x = 0;
            orientation_y = 0;
          }
        }
      }
      `;
      break;
    case 'unsave' :
      save = `
      orientation_x = (orientation.x);
      orientation_y = (orientation.y);
      hig_x = (parameter.x.hig);
      hig_y = (parameter.y.hig);
      hig_z = (parameter.z.hig);
      start_touch_flag = true;
      end_touch_flag = true;
      loop_num = 0;
      `;
      break;
    case 'any_save' :
      save = `
      // タッチセンサの値の取得
      touch_x = (touchX);
      touch_y = (touchY) - 80;

      if (!(start_touch_flag) || !(end_touch_flag)) {
        await Canvas.ClearCanvas();
      }
      if (!(start_touch_flag)) { // センサの値の保存の開始処理
        draw_ball('blue', window.innerWidth / 2, window.innerHeight / 2, touch_circle_radius);// 円の描画
        context.fillStyle = 'white';// 説明の描画
        context.font = "bold " + explain_size + "px 'ＭＳ ゴシック'";
        context.fillText("青い円を押すと傾きセンサの値の", window.innerWidth / 20, window.innerHeight / 4);
        context.fillText("保存を開始します。", window.innerWidth / 20, window.innerHeight / 4 + window.innerWidth / 20);
        if (Math.sqrt(Math.pow(touch_x - window.innerWidth / 2, 2) + Math.pow(touch_y - window.innerHeight / 2, 2)) < touch_circle_radius) { // 円の範囲内か調べる
          start_touch_flag = true;
          touchX = 0; // タッチセンサの座標をリセット
          touchY = 0;
        }
      }
      else if (!(end_touch_flag)) { // センサの値の保存の終了処理
        orientation_list.push([(orientation.x), (orientation.y)]);
        hig_list.push([(parameter.x.hig), (parameter.y.hig), (parameter.z.hig)]);
        draw_ball('blue', window.innerWidth / 2, window.innerHeight / 2, touch_circle_radius);// 円の描画
        context.fillStyle = 'white';// 説明の描画
        context.font = "bold " + explain_size + "px 'ＭＳ ゴシック'";
        context.fillText("青い円を押すと傾きセンサの値の", window.innerWidth / 20, window.innerHeight / 4);
        context.fillText("保存を終了します。", window.innerWidth / 20, window.innerHeight / 4 + window.innerWidth / 20);
        // ボールの描画
        ball_coordinate_list[0] += (orientation.y);
        ball_coordinate_list[1] += (orientation.x);
        ball_coordinate_list = check_ball_coordinate(ball_coordinate_list);
        draw_ball('green', ball_coordinate_list[0], ball_coordinate_list[1], 50);
        if (Math.sqrt(Math.pow(touch_x - window.innerWidth / 2, 2) + Math.pow(touch_y - window.innerHeight / 2, 2)) < touch_circle_radius) { // 円の範囲内か調べる
          end_touch_flag = true;
          await Canvas.ClearCanvas();
        }
      }
      else if (orientation_count < orientation_list.length - 1) { // 傾きを保存し終えた後の処理
        orientation_x = orientation_list[orientation_count][0];
        orientation_y = orientation_list[orientation_count][1];
        hig_x = hig_list[orientation_count][0];
        hig_y = hig_list[orientation_count][1];
        hig_z = hig_list[orientation_count][2];
        orientation_count += 1;
      }
      else {
        orientation_x = 0;
        orientation_y = 0;
        hig_x = 0;
        hig_y = 0;
        hig_z = 0;
      }
      `;
      break;
    default :
      save = '';
  }

  var code = save;
  return code;
};