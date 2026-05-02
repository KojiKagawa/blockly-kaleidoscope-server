Blockly.Blocks['return_canvas'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("キャンバス内容をPCで表示");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
};

Blockly.Blocks['return_cencer'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("センサーのデータをPCに送信");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
};