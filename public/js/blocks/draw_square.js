Blockly.JavaScript['draw_square'] = function(block) {
  var value_v1_x = Blockly.JavaScript.valueToCode(block, 'v1_x', Blockly.JavaScript.ORDER_ATOMIC);
  var value_v1_y = Blockly.JavaScript.valueToCode(block, 'v1_y', Blockly.JavaScript.ORDER_ATOMIC);
  var value_v2_x = Blockly.JavaScript.valueToCode(block, 'v2_x', Blockly.JavaScript.ORDER_ATOMIC);
  var value_v2_y = Blockly.JavaScript.valueToCode(block, 'v2_y', Blockly.JavaScript.ORDER_ATOMIC);
  var value_v3_x = Blockly.JavaScript.valueToCode(block, 'v3_x', Blockly.JavaScript.ORDER_ATOMIC);
  var value_v3_y = Blockly.JavaScript.valueToCode(block, 'v3_y', Blockly.JavaScript.ORDER_ATOMIC);
  var value_v4_x = Blockly.JavaScript.valueToCode(block, 'v4_x', Blockly.JavaScript.ORDER_ATOMIC);
  var value_v4_y = Blockly.JavaScript.valueToCode(block, 'v4_y', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_isfill = block.getFieldValue('isfill');
  // TODO: Assemble JavaScript into code variable.
  let isfill;
  switch (dropdown_isfill) {
    case 'draw' : isfill = 'context.stroke();\n'; break;
    case 'fill' : isfill = 'context.fill();\n';  break;
    default : isfill = null;
  }

  var code = 'context.beginPath();\n'
              + 'context.moveTo(' + value_v1_x + ', ' + value_v1_y + ');\n'
              + 'context.lineTo(' + value_v2_x + ', ' + value_v2_y + ');\n'
              + 'context.lineTo(' + value_v3_x + ', ' + value_v3_y + ');\n'
              + 'context.lineTo(' + value_v4_x + ', ' + value_v4_y + ');\n'
              + 'context.closePath();\n'
              + isfill;

  return code;
};