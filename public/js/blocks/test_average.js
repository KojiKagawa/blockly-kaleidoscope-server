Blockly.JavaScript['test_average'] = function (block) {
  var value_v1 = Blockly.JavaScript.valueToCode(block, 'v1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_v2 = Blockly.JavaScript.valueToCode(block, 'v2', Blockly.JavaScript.ORDER_ATOMIC);
  var value_v3 = Blockly.JavaScript.valueToCode(block, 'v2', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  // var code = '(' + value_v1 + '+' + value_v2 + '+' + value_v3 + ')/3';


  // var code = 'center_x = 300;\n';
  // code += 'center_y = 300;\n';
  var code = "Canvas.StyleFillColor('#000000');\n";
  code += "Canvas.StyleStrokeColor('#000000');\n";
  code += 'Canvas.DrawLine(600, 0, 0, 600, );\n';
  code += 'Canvas.DrawLine(0, 0, 600, 600, );\n';
  code += "Canvas.StyleStrokeColor('#ff0000');\n";
  code += "Canvas.StyleFillColor('#33ccff');\n";
  code += 'context.moveTo(3.061616997868383e-15 + (400 - center_x) + center_x, -1 * (50 - (500 - center_y)) + center_y);\n';
  code += 'context.lineTo(-43.30127018922193 + (400 - center_x) + center_x, -1 * (-25.000000000000007 - (500 - center_y)) + center_y);\n';
  code += 'context.lineTo(43.30127018922192 + (400 - center_x) + center_x, -1 * (-25.00000000000002 - (500 - center_y)) + center_y);\n';
  code += 'context.closePath();\n';
  code += 'context.fill();\n';

  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

// Blockly.JavaScript['test_console_log'] = function (block) {
//   var value_msg = Blockly.JavaScript.valueToCode(block, 'msg', Blockly.JavaScript.ORDER_ATOMIC);
//   // TODO: Assemble JavaScript into code variable.
//   var code = 'console.log(' + value_msg + ')\n';
//   return code;
// };

// Blockly.JavaScript['save_cencer'] = function(block) {
//   var value_item1 = Blockly.JavaScript.valueToCode(block, 'items', Blockly.JavaScript.ORDER_ATOMIC);
//   // TODO: Assemble JavaScript into code variable.
//   var code = 'items.push(' + );
//   //
//   //items.push(5,6,7,8);

//   // TODO: Change ORDER_NONE to the correct strength.
//   return [code, Blockly.JavaScript.ORDER_NONE];
// };