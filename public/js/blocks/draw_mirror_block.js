Blockly.Blocks['draw_mirror'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("線の色")
        .appendField(new Blockly.FieldColour("#ff0000"), "stroke_color")
        .appendField("の万華鏡の鏡を")
        .appendField(new Blockly.FieldDropdown([["描画する","draw"], ["描画しない","clear"]]), "isdraw");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};