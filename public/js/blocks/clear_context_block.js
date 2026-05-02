Blockly.Blocks["clear_context"] = {
  init: function () {
    this.appendDummyInput().appendField("contextの内容を削除する");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};
