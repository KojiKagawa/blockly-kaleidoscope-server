Blockly.JavaScript['affine_transformation_y'] = function(block) {
  var value_x = Blockly.JavaScript.valueToCode(block, 'x', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y = Blockly.JavaScript.valueToCode(block, 'y', Blockly.JavaScript.ORDER_ATOMIC);
  var value_center_posx = Blockly.JavaScript.valueToCode(block, 'center_posX', Blockly.JavaScript.ORDER_ATOMIC);
  var value_center_posy = Blockly.JavaScript.valueToCode(block, 'center_posY', Blockly.JavaScript.ORDER_ATOMIC);
  var value_angle = Blockly.JavaScript.valueToCode(block, 'angle', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var value_rad = value_angle + '* Math.PI / 180.0';
  // var code = Math.sin(value_rad) * value_x + Math.cos(value_rad) * value_y + (value_center_posy - value_center_posx * Math.sin(value_rad) - value_center_posy * Math.cos(value_rad));
  var code = 'Math.sin(' + value_rad + ') * ' + value_x + '+ Math.cos(' + value_rad + ') * ' + value_y + '+ (' + value_center_posy + ' - ' + value_center_posx + ' * Math.sin(' + value_rad + ') - ' + value_center_posy + ' * Math.cos(' + value_rad + '))';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};