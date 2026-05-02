Blockly.Blocks["reset_count"] = {
  init: function () {
    this.appendDummyInput().appendField("カウントをリセットする");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};
