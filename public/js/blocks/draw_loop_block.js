Blockly.Blocks["draw_loop"] = {
  init: function () {
    this.appendDummyInput().appendField(
      "このブロックの中に描画ブロックを入れる",
    );
    this.appendStatementInput("loop").setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};
