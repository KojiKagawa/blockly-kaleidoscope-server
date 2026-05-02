Blockly.JavaScript['color_change'] = function(block) {
  var value_color = Blockly.JavaScript.valueToCode(block, 'color', Blockly.JavaScript.ORDER_ATOMIC);
  var value_point_y = Blockly.JavaScript.valueToCode(block, 'point_y', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'await Canvas.ColorChange('+value_color+', '+value_point_y+')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};