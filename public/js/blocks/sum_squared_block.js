Blockly.Blocks["sum_squared"] = {
  init: function () {
    this.appendValueInput("v1").setCheck("Number");
    this.appendValueInput("v2").setCheck("Number").appendField("と");
    this.appendDummyInput().appendField("の合計の２乗");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(255);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.Blocks["test_console_log"] = {
  init: function () {
    this.appendValueInput("msg").setCheck(null);
    this.appendDummyInput().appendField("を出力する");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};
