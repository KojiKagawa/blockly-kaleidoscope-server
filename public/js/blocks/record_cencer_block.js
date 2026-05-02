Blockly.Blocks['cencer_record_spd'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("速度aa")
        .appendField(new Blockly.FieldDropdown([["x","record_spd_x"], ["y","record_spd_y"], ["z","record_spd_z"]]), "spd")
        .appendField("を取得するaa");
    this.setOutput(true, null);
    this.setColour(60);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};