Blockly.Blocks["draw_square"] = {
  init: function () {
    this.appendValueInput("v1_x").setCheck("Number").appendField("4つの座標(");
    this.appendValueInput("v1_y").setCheck("Number").appendField(",");
    this.appendValueInput("v2_x").setCheck("Number").appendField("), (");
    this.appendValueInput("v2_y").setCheck("Number").appendField(",");
    this.appendValueInput("v3_x").setCheck("Number").appendField("), (");
    this.appendValueInput("v3_y").setCheck("Number").appendField(",");
    this.appendValueInput("v4_x").setCheck("Number").appendField("), (");
    this.appendValueInput("v4_y").setCheck("Number").appendField(",");
    this.appendDummyInput()
      .appendField(")を通る長方形を")
      .appendField(
        new Blockly.FieldDropdown([
          ["描画する", "draw"],
          ["塗りつぶす", "fill"],
        ]),
        "isfill",
      );
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(180);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};
