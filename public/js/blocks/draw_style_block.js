Blockly.Blocks["style_stroke_wide"] = {
  init: function () {
    this.appendValueInput("num").setCheck(null).appendField("線の幅を");
    this.appendDummyInput().appendField("にする");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(345);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.Blocks["style_fill_color"] = {
  init: function () {
    this.appendValueInput("_color").setCheck(null).appendField("塗りの色を");
    this.appendDummyInput().appendField("にする");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(345);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.Blocks["style_fill_transparent"] = {
  init: function () {
    this.appendValueInput("_alpha")
      .setCheck(null)
      .appendField("塗りの不透明度を");
    this.appendDummyInput().appendField("にする");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(345);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.Blocks["style_stroke_color"] = {
  init: function () {
    this.appendValueInput("color").setCheck(null).appendField("線の色を");
    this.appendDummyInput().appendField("にする");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(345);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.Blocks["style_stroke_transparent"] = {
  init: function () {
    this.appendValueInput("alpha").setCheck(null).appendField("線の不透明度を");
    this.appendDummyInput().appendField("にする");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(345);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};
