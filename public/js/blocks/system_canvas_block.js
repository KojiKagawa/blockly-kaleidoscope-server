Blockly.Blocks["canvas_translate"] = {
  init: function () {
    this.appendValueInput("translate_x")
      .setCheck(null)
      .appendField("キャンバスを(");
    this.appendValueInput("translate_y").setCheck(null).appendField(",");
    this.appendDummyInput().appendField(")だけずらす");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.Blocks["canvas_rotate"] = {
  init: function () {
    this.appendValueInput("rotate").setCheck(null).appendField("キャンバスを");
    this.appendDummyInput().appendField("度だけ回転する");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.Blocks["context_save"] = {
  init: function () {
    this.appendDummyInput().appendField("コンテキストを保存する");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.Blocks["context_restore"] = {
  init: function () {
    this.appendDummyInput().appendField("コンテキストをもとに戻す");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.Blocks["create_canvas"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("横幅")
      .appendField(new Blockly.FieldNumber(200, 0), "c_width")
      .appendField("縦幅")
      .appendField(new Blockly.FieldNumber(200, 0), "c_height")
      .appendField("背景")
      .appendField(new Blockly.FieldColour("#ffffff"), "background");
    this.appendDummyInput().appendField("のキャンバスを生成する");
    this.appendStatementInput("use_canvas").setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.Blocks["allclear_canvas"] = {
  init: function () {
    this.appendDummyInput().appendField("キャンバス内容を削除する");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.Blocks["fill_rect"] = {
  init: function () {
    this.appendValueInput("rect_x").setCheck(null).appendField("(");
    this.appendValueInput("rect_y").setCheck(null).appendField(",");
    this.appendDummyInput().appendField(")から");
    this.appendValueInput("rect_x2").setCheck(null).appendField("(");
    this.appendValueInput("rect_y2").setCheck(null).appendField(",");
    this.appendDummyInput().appendField(")の四角形を描画する");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.Blocks["fill_circle"] = {
  init: function () {
    this.appendValueInput("point_x").setCheck(null).appendField("(");
    this.appendValueInput("point_y").setCheck(null).appendField(",");
    this.appendValueInput("radius").setCheck(null).appendField(")を中心に半径");
    this.appendDummyInput()
      .appendField("の円を描画する")
      .appendField(new Blockly.FieldColour("#ff0000"), "color");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.Blocks["fill_triangle"] = {
  init: function () {
    this.appendDummyInput();
    this.appendValueInput("x1").setCheck(null).appendField("(");
    this.appendValueInput("y1").setCheck(null).appendField(",");
    this.appendValueInput("x2").setCheck(null).appendField("), (");
    this.appendValueInput("y2").setCheck(null).appendField(",");
    this.appendValueInput("x3").setCheck(null).appendField("), (");
    this.appendValueInput("y3").setCheck(null).appendField(",");
    this.appendDummyInput()
      .appendField(")を通る三角形を描画する")
      .appendField(new Blockly.FieldColour("#ff0000"), "color");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};
