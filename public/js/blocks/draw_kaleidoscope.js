Blockly.JavaScript['draw_kaleidoscope'] = function(block) {
  var value_center_x = Blockly.JavaScript.valueToCode(block, 'center_x', Blockly.JavaScript.ORDER_ATOMIC);
  var value_center_y = Blockly.JavaScript.valueToCode(block, 'center_y', Blockly.JavaScript.ORDER_ATOMIC);
  var value_coordinate_x = Blockly.JavaScript.valueToCode(block, 'coordinate_x', Blockly.JavaScript.ORDER_ATOMIC);
  var value_coordinate_y = Blockly.JavaScript.valueToCode(block, 'coordinate_y', Blockly.JavaScript.ORDER_ATOMIC);
  var value_length = Blockly.JavaScript.valueToCode(block, 'length', Blockly.JavaScript.ORDER_ATOMIC);
  var value_height = Blockly.JavaScript.valueToCode(block, 'height', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_isshape = block.getFieldValue('isshape');
  var dropdown_isfill = block.getFieldValue('isfill');
  // TODO: Assemble JavaScript into code variable.
  let isfill;
  switch (dropdown_isfill) {
    case 'draw' : isfill = 'context.stroke();\n'; break;
    case 'fill' : isfill = 'context.fill();\n';  break;
    default : isfill = null;
  }

  var slope_list; // 傾きのリスト
  // let isshape;
  // switch (dropdown_isshape) {
  //   case 'triangle' : isshaape = [1, -1, 1]; break;
  //   case 'fill' : isshape = 'context.fill();\n';  break;
  //   default : isshape = [];
  // }

  let angle;
  switch (dropdown_isshape) {
    case 'triangle' : angle = [90, 210, 330]; break;
    case 'quadrangle' : angle = [45, 135, 225, 315];  break;
    case 'pentagon' : angle = [90, 162, 234, 306, 378];  break;
    default : angle = [];
  }
  // var slope_list = [1, -1, 1];
  var slope_list = [Math.sqrt(3), 0, -Math.sqrt(3), Math.sqrt(3), 0];

  // var CENTER_POS = 300;

  // 半径50の円の中に正三角形を作る
  // 元の座標の計算
  var current_coordinate_list = []; // 現在の座標
  var radian;
  var x, y;
  var radius = 50; // 円の半径
  for (var i = 0; i < angle.length; i++) {
    radian = angle[i] * Math.PI / 180;
    //current_coordinate_list.push([radius * Math.cos(radian) + ' + ' + value_coordinate_x, '-1 * ' + radius * Math.sin(radian) + ' + ' + value_coordinate_y]);
    // x = radius * Math.cos(radian) + Number(value_coordinate_x);
    // y = -radius * Math.sin(radian) + Number(value_coordinate_y);
    // x = radius * Math.cos(radian) + ' + ' + value_coordinate_x + ' - ' + value_center_x;
    // y = radius * Math.sin(radian) - value_coordinate_y - value_center_y;

    x = radius * Math.cos(radian) + ' + (' + value_coordinate_x + ' - center_x)';
    y = radius * Math.sin(radian) + ' - (' + value_coordinate_y + ' - center_y)';

    current_coordinate_list.push([x, y]);
  }
  // 元の正三角形を描画する
  var lineto = "";
  lineto = lineto + draw_shape(current_coordinate_list, isfill);

  // // 万華鏡の形
  // // 90度 → 正方形, y = x, y = -x
  // // var angle; 鏡の角度
  // var next_coordinate_list = []; // 線対称移動後の座標
  // var a, b;
  // for (var i = 0; i < slope_list.length; i++) { // 線対称移動する直線の傾きの数だけ繰り返す
  //   next_coordinate_list = [];
  //   for (var j = 0; j < current_coordinate_list.length; j++) { // 線対称移動する座標の数だけ繰り返す
  //     //  a = '-((Math.pow(' + isshape[i] + ', 2) - 1) * ' + current_coordinate_list[i][0] + ' + 2 * ' + isshape[i] + ' * ' + current_coordinate_list[j][1] + ') / (Math.pow(' + isshape[i] + ', 2) + 1)';
  //     //  b = '-(2 * ' + isshape[i] + ' * ' + current_coordinate_list[j][0] + ' + (1 - Math.pow(' + isshape[i] + ', 2)) * ' + current_coordinate_list[j][1] + ') / (Math.pow(' + isshape[i] + ', 2) + 1)';
  //     // a = -((Math.pow(isshape[i], 2) - 1) * current_coordinate_list[i][0] + 2 * isshape[i] * current_coordinate_list[j][1]) / (Math.pow(isshape[i], 2) + 1);
  //     // b = -(2 * isshape[i] * current_coordinate_list[j][0] + (1 - Math.pow(isshape[i], 2)) * current_coordinate_list[j][1]) / (Math.pow(isshape[i], 2) + 1);
  //     // a = -1 * ((Math.pow(isshape[i], 2) - 1) * current_coordinate_list[i][0] - 2 * isshape[i] * current_coordinate_list[j][1]) / (Math.pow(isshape[i], 2) + 1);
  //     // b = -1 * (-2 * isshape[i] * current_coordinate_list[j][0] + (1 - Math.pow(isshape[i], 2)) * current_coordinate_list[j][1]) / (Math.pow(isshape[i], 2) + 1);
  //     a = '-1 * ((Math.pow(' + slope_list[i] + ', 2) - 1) * (' + current_coordinate_list[j][0] + ') - 2 * (' + slope_list[i] + ') * (' + current_coordinate_list[j][1] + ')) / (Math.pow((' + slope_list[i] + '), 2) + 1)';
  //     b = '-1 * (-2 * (' + slope_list[i] + ') * (' + current_coordinate_list[j][0] + ') + (1 - Math.pow(' + slope_list[i] + ', 2)) * (' + current_coordinate_list[j][1] + ')) / (Math.pow((' + slope_list[i] + '), 2) + 1)';
  //     next_coordinate_list.push([a, b]);
  //   }
  //   // lineto = lineto + draw_shape(next_coordinate_list, isfill, CENTER_POS);
  //   lineto = lineto + draw_shape(next_coordinate_list, isfill, value_center_x, value_center_y);
  //   current_coordinate_list = next_coordinate_list;
  // }


  var code = lineto;
  return code;
};

function draw_shape(coordinate_list, isfill) {
  var lineto = '';
  
  for (var i = 0; i < coordinate_list.length; i++) {
    if (i == 0)
      lineto = lineto + 'context.moveTo(' + coordinate_list[i][0] + ' + center_x, -1 * (' + coordinate_list[i][1] + ') + center_y);\n';
    else 
      lineto = lineto + 'context.lineTo(' + coordinate_list[i][0] + ' + center_x, -1 * (' + coordinate_list[i][1] + ') + center_y);\n';
  }
  lineto = lineto + 'context.closePath();\n' + isfill;

  return lineto;
}