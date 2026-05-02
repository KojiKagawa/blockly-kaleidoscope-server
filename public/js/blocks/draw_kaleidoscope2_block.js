Blockly.Blocks['draw_kaleidoscope2'] = {
  init: function() {
    this.appendValueInput("length")
        .setCheck("Number")
        .appendField("横");
    this.appendValueInput("height")
        .setCheck("Number")
        .appendField("倍 × 縦");
    this.appendDummyInput()
        .appendField("倍, 塗りの色")
        .appendField(new Blockly.FieldColour("#ff0000"), "fill_color")
        .appendField(", 線の色")
        .appendField(new Blockly.FieldColour("#ff0000"), "stroke_color")
        .appendField("の")
        .appendField(new Blockly.FieldDropdown([["三角形","triangle"], ["四角形","quadrangle"], ["五角形","pentagon"], ["六角形","hexagon"], ["星","star"]]), "isshape")
        .appendField("を")
        .appendField(new Blockly.FieldDropdown([["描画する","draw"], ["塗りつぶす","fill"]]), "isfill");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};