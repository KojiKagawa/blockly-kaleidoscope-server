Blockly.Blocks["define_variable_function"] = {
  init: function () {
    this.appendDummyInput().appendField("変数と関数を定義する");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};
