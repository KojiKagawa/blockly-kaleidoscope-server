Blockly.JavaScript['angle'] = function(block) {
  var angle_angle = block.getFieldValue('angle');
  // TODO: Assemble JavaScript into code variable.
  var code = ''+angle_angle;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['sleep'] = function(block) {
  var number_sleep_time = block.getFieldValue('sleep_time');
  // TODO: Assemble JavaScript into code variable.
  var code = 'await Utilities.Sleep('+number_sleep_time+')\n';
  return code;
};

Blockly.JavaScript['average'] = function(block) {
  var value_v1 = Blockly.JavaScript.valueToCode(block, 'v1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_v2 = Blockly.JavaScript.valueToCode(block, 'v2', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '(' + value_v1 + '+' + value_v2 + ')/2';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['console_log'] = function(block) {
  var value_msg = Blockly.JavaScript.valueToCode(block, 'msg', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'console.log(' + value_msg + ');\n';
  return code;
};

Blockly.JavaScript['alert'] = function(block) {
  var value_alert_msg = Blockly.JavaScript.valueToCode(block, 'alert_msg', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'alert(' + value_alert_msg + ');\n';
  return code;
};