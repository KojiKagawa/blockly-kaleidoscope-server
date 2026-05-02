Blockly.Blocks["tap_square"] = {
  init: function () {
    this.appendValueInput("coordinate_x")
      .setCheck("Number")
      .appendField("座標 (");
    this.appendValueInput("coordinate_y").setCheck("Number").appendField(", ");
    this.appendValueInput("length").setCheck("Number").appendField(")にサイズ");
    this.appendValueInput("height").setCheck("Number").appendField("×");
    this.appendDummyInput().appendField("の四角形を描画する");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};
