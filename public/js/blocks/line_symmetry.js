Blockly.JavaScript['line_symmetry'] = function(block) {
  var value_original_x = Blockly.JavaScript.valueToCode(block, 'Original_x', Blockly.JavaScript.ORDER_ATOMIC);
  var value_original_y = Blockly.JavaScript.valueToCode(block, 'Original_y', Blockly.JavaScript.ORDER_ATOMIC);
  var value_slope = Blockly.JavaScript.valueToCode(block, 'Slope', Blockly.JavaScript.ORDER_ATOMIC);
  var value_intercept = Blockly.JavaScript.valueToCode(block, 'Intercept', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_pos = block.getFieldValue('Pos');
  // TODO: Assemble JavaScript into code variable.
  // 参考：https://manapedia.jp/text/2987
  // 参考先のサイトの答えに間違いあり
  // 正しい解は、a = 16/5, b = 7/5

  // var mat= new Array(2); // 連立方程式を解くための行列2*3
  // mat[0] = new Array(3);
  // mat[1] = new Array(3);

  // // 連立方程式を作る
  // mat[0][0] = -1 * value_slope;
  // mat[0][1] = 1;
  // mat[0][2] = -1 * value_intercept;

  // Pos = -((Math.pow(-value_slope, 2) + 1) * value_original_x + 2 * value_slope * 1 * value_original_y + 2 * value_slope * value_intercept) / (Math.pow(-value_slope, 2) + 1);
  // Pos = '-((Math.pow(' + -value_slope + ', 2) + 1) * ' + value_original_x + ' + 2 * ' + value_slope + ' * 1 * ' + value_original_y + ' + 2 * ' + value_slope + ' * ' + value_intercept + ') / (Math.pow(-' + value_slope + ', 2) + 1);\n';

  // Pos = -(2 * value_slope * 1 * value_original_x + (1 - Math.pow(value_slope, 2) * value_original_y + 2 * 1 * value_intercept)) / (Math.pow(-value_slope, 2) + 1);
  // Pos = '-(2 * ' + value_slope + ' * 1 * ' + value_original_x + ' + (1 - Math.pow(' + value_slope + ', 2) * ' + value_original_y + ' + 2 * 1 * ' + value_intercept + ')) / (Math.pow(-' + value_slope + ', 2) + 1);\n';

  // let Pos;
  // switch (dropdown_pos) {
  //   case 'X_Coordinate' : Pos = '-1 * (Math.pow(' + -value_slope + ', 2) + 1) * ' + value_original_x + ' + 2 * ' + value_slope + ' * 1 * ' + value_original_y + ' + 2 * ' + value_slope + ' * ' + value_intercept + ') / (Math.pow(-' + value_slope + ', 2) + 1);\n'; break;
  //   case 'Y_Coordinate' : Pos = '-1 * (2 * ' + value_slope + ' * 1 * ' + value_original_x + ' + (1 - Math.pow(' + value_slope + ', 2) * ' + value_original_y + ' + 2 * 1 * ' + value_intercept + ')) / (Math.pow(-' + value_slope + ', 2) + 1);\n';  break;
  //   default : Pos = null;
  // }

  let Pos;
  switch (dropdown_pos) {
    case 'X_Coordinate' : Pos = '-((Math.pow(-' + value_slope + ', 2) - 1) * ' + value_original_x + ' + 2 * -' + value_slope + ' * 1 * -' + value_original_y + ' + 2 * -' + value_slope + ' * ' + value_intercept + ') / (Math.pow(-' + value_slope + ', 2) + 1)'; break;
    // case 'Y_Coordinate' : Pos = '-(2 * -' + value_slope + ' * 1 * ' + value_original_x + ' + (1 - Math.pow(-' + value_slope + ', 2) * -' + value_original_y + ' + 2 * 1 * ' + value_intercept + ')) / (Math.pow(-' + value_slope + ', 2) + 1)';  break;
    case 'Y_Coordinate' : Pos = '-(-(2 * -' + value_slope + ' * 1 * ' + value_original_x + ' + (1 - Math.pow(-' + value_slope + ', 2)) * -' + value_original_y + ' + 2 * 1 * 0) / (Math.pow(-' + value_slope + ', 2) + 1))'; break;
    default : Pos = null;
  }

  // -(2 * -(slope_list[(i - 1)]) * 1 * (current_coordinate[0]) + (1 - Math.pow(-(slope_list[(i - 1)]), 2) * -(current_coordinate[1]) + 2 * 1 * 0)) / (Math.pow(-(slope_list[(i - 1)]), 2) + 1);

  var code = Pos;
  // var code = 'context.beginPath();\n'
  //             + 'context.moveTo(' + value_v1_x +', ' + value_v1_y + ');\n'
  //             + 'context.lineTo(' + value_v2_x + ', ' + value_v2_y + ');\n'
  //             + 'context.lineTo(' + value_v3_x + ', ' + value_v3_y + ');\n'
  //             + 'context.lineTo(' + value_v4_x + ', ' + value_v4_y + ');\n'
  //             + 'context.closePath();\n'
  //             + Pos;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_MEMBER];
  // return code;
};