Blockly.JavaScript['setup_sensor'] = function(block) {
    // TODO: Assemble JavaScript into code variable.
    var code = 'let orientation = await SmartDevice.InitOrientation(1);\nlet parameter = await SmartDevice.InitAcceleration(1);\nlet position = await SmartDevice.LogPosition();\n';
    return code;
};

Blockly.JavaScript['setup_cencer_do'] = function(block) {
    var number_interval = block.getFieldValue('interval');
    // TODO: Assemble JavaScript into code variable.
    var code = 'let orientation = await SmartDevice.InitOrientation('+number_interval+');\n';
    return code;
};

  Blockly.JavaScript['cencer_do_get'] = function(block) {
    var dropdown_get_do = block.getFieldValue('get_do');
    // TODO: Assemble JavaScript into code variable.
    switch( dropdown_get_do ) {
      case 'dox' : code = 'orientation.x'; break;
      case 'doy' : code = 'orientation.y'; break;
      case 'doz' : code = 'orientation.z'; break;
      default : code = 'undefined';
    }
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['setup_cencer_dm'] = function(block) {
    var number_interval = block.getFieldValue('interval');
    // TODO: Assemble JavaScript into code variable.
    var code = 'let parameter = await SmartDevice.InitAcceleration('+number_interval+');\n';
    return code;
};

  Blockly.JavaScript['cencer_dm_get'] = function(block) {
    var dropdown_get_dm = block.getFieldValue('get_dm');
    // TODO: Assemble JavaScript into code variable.
    switch( dropdown_get_dm ) {
      case 'dmx' : code = 'parameter.x.hig'; break;
      case 'dmy' : code = 'parameter.y.hig'; break;
      case 'dmz' : code = 'parameter.z.hig'; break;
      default : code = 'undefined';
    }
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['cencer_get_dm_spd'] = function(block) {
    var dropdown_spd = block.getFieldValue('spd');
    // TODO: Assemble JavaScript into code variable.
    switch( dropdown_spd ) {
      case 'spd_x' : code = 'parameter.x.spd'; break;
      case 'spd_y' : code = 'parameter.y.spd'; break;
      case 'spd_z' : code = 'parameter.z.spd'; break;
      default : code = 'undefined';
    }
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
};

  Blockly.JavaScript['cencer_get_dm_dif'] = function(block) {
    var dropdown_dif = block.getFieldValue('dif');
    // TODO: Assemble JavaScript into code variable.
    switch( dropdown_dif ) {
      case 'dif_x' : code = 'parameter.x.dif'; break;
      case 'dif_y' : code = 'parameter.y.dif'; break;
      case 'dif_z' : code = 'parameter.z.dif'; break;
      default : code = 'undefined';
    }
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['cencer_get_touch'] = function(block) {
  var dropdown_touch = block.getFieldValue('pos');

  // TODO: Assemble JavaScript into code variable.
  switch( dropdown_touch ) {
    case 'touch_x' : code = 'touchX'; break;
    case 'touch_y' : code = 'touchY'; break;
    default : code = 'undefined';
  }
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['remove_cencer_do'] = function(block) {
    // TODO: Assemble JavaScript into code variable.
    var code = 'SmartDevice.RemoveOrientation();\n';
    return code;
};

  Blockly.JavaScript['remove_cencer_dm'] = function(block) {
    // TODO: Assemble JavaScript into code variable.
    var code = 'SmartDevice.RemoveAcceleration();\n';
    return code;
};

Blockly.JavaScript['remove_cencer_touch'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'SmartDevice.RemoveAcceleration();\n';
  return code;
};
