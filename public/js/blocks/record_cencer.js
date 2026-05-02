Blockly.JavaScript['cencer_record_spd'] = function(block) {
  var record_spd = block.getFieldValue('spd');
  // TODO: Assemble JavaScript into code variable.
  switch( record_spd ) {
    case 'record_spd_x' : code = 'parameter.x.spd'; break;
    case 'record_spd_y' : code = 'parameter.y.spd'; break;
    case 'record_spd_z' : code = 'parameter.z.spd'; break;
    default : code = 'undefined';
  }
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};