Blockly.Blocks["draw_triangle"] = {
  init: function () {
    this.appendDummyInput();
    this.appendValueInput("x1").setCheck(null).appendField("(");
    this.appendValueInput("y1").setCheck(null).appendField(",");
    this.appendValueInput("x2").setCheck(null).appendField(")-(");
    this.appendValueInput("y2").setCheck(null).appendField(",");
    this.appendValueInput("x3").setCheck(null).appendField(")-(");
    this.appendValueInput("y3").setCheck(null).appendField(",");
    this.appendDummyInput()
      .appendField(")を通る三角形を")
      .appendField(
        new Blockly.FieldDropdown([
          ["描画する", "draw"],
          ["塗りつぶす", "fill"],
        ]),
        "isfill",
      );
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(180);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.Blocks["draw_rect"] = {
  init: function () {
    this.appendValueInput("rect_x").setCheck(null).appendField("左上(");
    this.appendValueInput("rect_y").setCheck(null).appendField(",");
    this.appendDummyInput().appendField(")サイズ");
    this.appendValueInput("rect_x2").setCheck(null);
    this.appendValueInput("rect_y2").setCheck(null).appendField("×");
    this.appendDummyInput()
      .appendField("の長方形を")
      .appendField(
        new Blockly.FieldDropdown([
          ["描画する", "draw"],
          ["塗りつぶす", "fill"],
        ]),
        "isfill",
      );
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(180);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.Blocks["draw_circle"] = {
  init: function () {
    this.appendValueInput("point_x").setCheck(null).appendField("(");
    this.appendValueInput("point_y").setCheck(null).appendField(",");
    this.appendValueInput("radius").setCheck(null).appendField(")を中心に半径");
    this.appendDummyInput()
      .appendField("の円を")
      .appendField(
        new Blockly.FieldDropdown([
          ["描画する", "draw"],
          ["塗りつぶす", "fill"],
        ]),
        "isfill",
      );
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(180);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.Blocks["draw_circle2"] = {
  init: function () {
    this.appendValueInput("point_x").setCheck(null).appendField("左上(");
    this.appendValueInput("point_y").setCheck(null).appendField(",");
    this.appendValueInput("width").setCheck(null).appendField(")サイズ");
    this.appendValueInput("height").setCheck(null).appendField("×");
    this.appendDummyInput()
      .appendField("の楕円を")
      .appendField(
        new Blockly.FieldDropdown([
          ["描画する", "draw"],
          ["塗りつぶす", "fill"],
        ]),
        "isfill",
      );
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(180);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.Blocks["draw_circle3"] = {
  init: function () {
    this.appendValueInput("point_x").setCheck(null).appendField("(");
    this.appendValueInput("point_y").setCheck(null).appendField(",");
    this.appendValueInput("width").setCheck(null).appendField(")を中心に幅");
    this.appendValueInput("height").setCheck(null).appendField("高さ");
    this.appendDummyInput()
      .appendField("の楕円を")
      .appendField(
        new Blockly.FieldDropdown([
          ["描画する", "draw"],
          ["塗りつぶす", "fill"],
        ]),
        "isfill",
      );
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(180);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.Blocks["draw_line"] = {
  init: function () {
    this.appendValueInput("x1").setCheck(null).appendField("(");
    this.appendValueInput("y1").setCheck(null).appendField(",");
    this.appendValueInput("x2").setCheck(null).appendField(")-(");
    this.appendValueInput("y2").setCheck(null).appendField(",");
    this.appendDummyInput().appendField(")に線を引く");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(180);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.Blocks["draw_point"] = {
  init: function () {
    this.appendValueInput("x").setCheck(null).appendField("(");
    this.appendValueInput("y").setCheck(null).appendField(",");
    this.appendDummyInput().appendField(")に点を描画する");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(180);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};
