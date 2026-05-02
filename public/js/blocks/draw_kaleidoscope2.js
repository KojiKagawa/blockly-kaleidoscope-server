Blockly.JavaScript['draw_kaleidoscope2'] = function(block) {
  // var value_center_x = Blockly.JavaScript.valueToCode(block, 'center_x', Blockly.JavaScript.ORDER_ATOMIC);
  // var value_center_y = Blockly.JavaScript.valueToCode(block, 'center_y', Blockly.JavaScript.ORDER_ATOMIC);
  var colour_fill_color = block.getFieldValue('fill_color');
  var colour_stroke_color = block.getFieldValue('stroke_color');
  var value_length = Blockly.JavaScript.valueToCode(block, 'length', Blockly.JavaScript.ORDER_ATOMIC);
  var value_height = Blockly.JavaScript.valueToCode(block, 'height', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_isshape = block.getFieldValue('isshape');
  var dropdown_isfill = block.getFieldValue('isfill');
  // // TODO: Assemble JavaScript into code variable.
  // var CANPAS_SIZE_X = 600;
  // var CANPAS_SIZE_Y = 600;
  // var center_x = CANPAS_SIZE_X / 2; // キャンパスの中心座標
  // var center_y = CANPAS_SIZE_Y / 2;

  let isfill;
  switch (dropdown_isfill) {
    case 'draw' : isfill = 'context.stroke();'; break;
    case 'fill' : isfill = 'context.fill();';  break;
    default : isfill = null;
  }

  // let angle;
  // switch (dropdown_isshape) {
  //   case 'triangle' : angle = [90, 210, 330]; break;
  //   case 'quadrangle' : angle = [45, 135, 225, 315];  break;
  //   case 'pentagon' : angle = [90, 162, 234, 306, 378];  break;
  //   case 'hexagon' : angle = [60, 120, 180, 240, 300, 360];  break;
  //   case 'star' : angle = [90, 306, 162, 378, 234];  break;
  //   default : angle = [];
  // }
  // var slope_list = [1, -1, 1];
  // var slope_list = [Math.sqrt(3), 0, -Math.sqrt(3), Math.sqrt(3), 0];

  // var initial_coordinate = generate_random_coordinate(center_x, center_y);

  // // 半径50の円の中に正三角形を作る
  // // 元の座標の計算
  // var current_coordinate_list = []; // 現在の座標
  // var radian;
  // var x, y;
  // var radius = 50; // 円の半径
  // for (var i = 0; i < angle.length; i++) {
  //   radian = angle[i] * Math.PI / 180;

  //   x = radius * Math.cos(radian) + Number(initial_coordinate[0] - center_x);
  //   y = radius * Math.sin(radian) - Number(initial_coordinate[1] - center_y);

  //   current_coordinate_list.push([x, y]);
  // }
  // 元の正三角形を描画する
  // var lineto = '';
  // lineto = lineto + draw_shape(current_coordinate_list, isfill, center_x, center_y, dropdown_isshape, colour_fill_color, colour_stroke_color, value_length, value_height);

  var lineto = `
  if (sensor_count == 0) { // 描画ループ1回目の時
    if ('${isfill}' == 'context.stroke();') { // 図形を描画する場合
      shape_color_list.push('${colour_stroke_color}');
    }
    else if ('${isfill}' == 'context.fill();') { // 図形を塗りつぶす場合
      shape_color_list.push('${colour_fill_color}');
    }
  }
  // 図形の色を変化させる
  shape_color_list[shape_count] = change_HSV(shape_color_list[shape_count], sensor_count);
  // 図形を描画する
  draw_shape(shape_color_list[shape_count], shape_color_list[shape_count], '${dropdown_isshape}', initial_coordinate_list[shape_count], friction_list[shape_count], current_coordinate_list, '${isfill}', ${value_length}, ${value_height});
  `;

  var code = lineto;
  
  return code;
};

// function draw_shape(coordinate_list, isfill, center_x, center_y, isshape, colour_fill_color, colour_stroke_color, length, height) {
//   var lineto = '';

//   lineto += `
//   if (sensor_count == 0) { // 描画ループ1回目の時
//     if ('${isfill}' == 'context.stroke();') { // 図形を描画する場合
//       shape_color_list.push('${colour_stroke_color}');
//     }
//     else if ('${isfill}' == 'context.fill();') { // 図形を塗りつぶす場合
//       shape_color_list.push('${colour_fill_color}');
//     }
//   }
//   shape_color_list[shape_count] = change_HSV(shape_color_list[shape_count], sensor_count);
//   draw_shape(shape_color_list[shape_count], shape_color_list[shape_count], '${isshape}', initial_coordinate_list[shape_count], friction_list[shape_count], current_coordinate_list, center_x, center_y, '${isfill}', slope_list, radius, ${length}, ${height});
//   `;

//   return lineto;
// }

// function generate_random_coordinate(center_x, center_y) {
//   var initial_coordinate = [0.0, 0.0]; // 初期位置のリスト
//   // 乱数で初期位置を生成
//   initial_coordinate[1] = Math.floor(Math.random() * -center_y); // Y座標の初期値：0～-center_y-1
//   initial_coordinate[0] = Math.floor(Math.random() * (initial_coordinate[1] / -Math.sqrt(3) - initial_coordinate[1] / Math.sqrt(3))) + Math.floor(initial_coordinate[1] / Math.sqrt(3)); // X座標の初期：y/√3～y/-√3
//   // // 初期位置をキャンバスの中心に向かって平行移動
//   initial_coordinate[0] += center_x;
//   initial_coordinate[1] = -(initial_coordinate[1] - center_y);
  
//   return initial_coordinate;
// }
