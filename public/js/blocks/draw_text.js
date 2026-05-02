Blockly.JavaScript['style_font'] = function(block) {
  var value_font = Blockly.JavaScript.valueToCode(block, 'font', Blockly.JavaScript.ORDER_ATOMIC);
  var value_size = Blockly.JavaScript.valueToCode(block, 'size', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'Canvas.StyleFont('+value_font+', '+value_size+');\n';
  return code;
};

Blockly.JavaScript['font'] = function(block) {
  var dropdown_font = block.getFieldValue('font');
  // TODO: Assemble JavaScript into code variable.
  var code = '"'+dropdown_font+'"';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['draw_text'] = function(block) {
  var value_x = Blockly.JavaScript.valueToCode(block, 'x', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y = Blockly.JavaScript.valueToCode(block, 'y', Blockly.JavaScript.ORDER_ATOMIC);
  var value_text = Blockly.JavaScript.valueToCode(block, 'text', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'Canvas.DrawText('+value_x+', '+value_y+', '+value_text+', true);\n';
  Canvas.DrawText()
  return code;
};