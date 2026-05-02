Blockly.Blocks["color_change"] = {
  init: function () {
    this.appendValueInput("color").setCheck(null).appendField("色");
    this.appendValueInput("point_y").setCheck(null).appendField("を");
    this.appendDummyInput().appendField("回転した色");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(15);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};
