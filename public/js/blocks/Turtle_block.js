Blockly.Blocks['turtle_pen'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["🐢ペンを下げる","Down"], ["🐢ペンを上げる","Up"]]), "Turtle_pen");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(140);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['turtle_roll'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("🐢回転↻");
    this.appendValueInput("roll")
        .setCheck("Number");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(140);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['turtle_dir'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("🐢");
    this.appendValueInput("dir")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField("を向く");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(140);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


Blockly.Blocks['turtle_forward'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["🐢前に進む","forward"], ["🐢後ろに戻る","back"]]), "Turtle_forward");
    this.appendValueInput("step")
        .setCheck(null);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(140);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['turtle_go'] = {
  init: function() {
    this.appendValueInput("posx")
        .setCheck("Number")
        .appendField("🐢(");
    this.appendValueInput("posy")
        .setCheck("Number")
        .appendField(",");
    this.appendDummyInput()
        .appendField(")に移動する");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(140);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['turtle_xpos'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("🐢の縦位置");
    this.setOutput(true, null);
    this.setColour(140);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['turtle_ypos'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("🐢の横位置");
    this.setOutput(true, null);
    this.setColour(140);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


Blockly.Blocks['turtle_angle'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("🐢の向き");
    this.setOutput(true, null);
    this.setColour(140);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
