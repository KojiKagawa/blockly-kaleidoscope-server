Blockly.Blocks["draw_kaleidoscope"] = {
  init: function () {
    this.appendValueInput("coordinate_x")
      .setCheck("Number")
      .appendField("中心座標 (");
    this.appendValueInput("coordinate_y").setCheck("Number").appendField(", ");
    this.appendValueInput("length").setCheck("Number").appendField("), サイズ");
    this.appendValueInput("height").setCheck("Number").appendField("×");
    this.appendDummyInput()
      .appendField("の")
      .appendField(
        new Blockly.FieldDropdown([
          ["三角形", "triangle"],
          ["四角形", "quadrangle"],
          ["五角形", "pentagon"],
        ]),
        "isshape",
      )
      .appendField("を")
      .appendField(
        new Blockly.FieldDropdown([
          ["描画する", "draw"],
          ["塗りつぶす", "fill"],
        ]),
        "isfill",
      );
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};
