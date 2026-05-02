Blockly.Blocks["create_windowsize_canvas"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("横幅と縦幅がウィンドウサイズ, 背景")
      .appendField(new Blockly.FieldColour("#ff0000"), "background");
    this.appendDummyInput().appendField("のキャンバスを生成する");
    this.appendStatementInput("use_canvas").setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};
