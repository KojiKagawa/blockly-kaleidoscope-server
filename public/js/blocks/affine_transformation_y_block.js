Blockly.Blocks["affine_transformation_y"] = {
  init: function () {
    this.appendValueInput("x").setCheck("Number").appendField("元座標(");
    this.appendValueInput("y").setCheck("Number").appendField(",");
    this.appendValueInput("center_posX")
      .setCheck("Number")
      .appendField(") を座標(");
    this.appendValueInput("center_posY").setCheck("Number").appendField(",");
    this.appendValueInput("angle").setCheck("Number").appendField(") を中心に");
    this.appendDummyInput().appendField("度回転したy座標を取得する");
    this.setOutput(true, "Number");
    this.setColour(255);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};
