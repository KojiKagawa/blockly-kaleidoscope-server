Blockly.Blocks["test_average"] = {
  init: function () {
    this.appendValueInput("v1").setCheck("Number");
    this.appendValueInput("v2").setCheck("Number").appendField("と");
    this.appendValueInput("v3").setCheck("Number").appendField("の");
    this.appendDummyInput().appendField("の平均値_test");
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
    this.appendDummyInput().appendField("を出力する_test");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.Blocks["save_cencer"] = {
  init: function () {
    this.appendDummyInput().appendField("センサーの");
    this.appendValueInput("item1").setCheck("Number");
    this.appendDummyInput().appendField("を配列に保存する");
    this.setInputsInline(true);
    this.setOutput(true, "Array");
    this.setColour(120);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};
