Blockly.Blocks['line_symmetry'] = {
  init: function() {
    this.appendValueInput("Original_x")
        .setCheck("Number")
        .appendField("元座標(");
    this.appendValueInput("Original_y")
        .setCheck("Number")
        .appendField(", ");
    this.appendValueInput("Slope")
        .setCheck("Number")
        .appendField(") を傾き");
    this.appendValueInput("Intercept")
        .setCheck("Number")
        .appendField(", 切片");
    this.appendDummyInput()
        .appendField("の直線で線対称移動したときの")
        .appendField(new Blockly.FieldDropdown([["x座標","X_Coordinate"], ["y座標","Y_Coordinate"]]), "Pos");
    this.setOutput(true, "Number");
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};