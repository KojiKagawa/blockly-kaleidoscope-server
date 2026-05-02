Blockly.Blocks["style_font"] = {
  init: function () {
    this.appendValueInput("font").setCheck("String").appendField("フォントを");
    this.appendValueInput("size")
      .setCheck("Number")
      .appendField("文字サイズを");
    this.appendDummyInput().appendField("にする");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(345);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.Blocks["font"] = {
  init: function () {
    this.appendDummyInput().appendField(
      new Blockly.FieldDropdown([
        ["ＭＳ 明朝", "ＭＳ 明朝"],
        ["ＭＳ ゴシック", "ＭＳ ゴシック"],
        ["ＨＧ丸ゴシックＭ－ＰＲＯ", "HGRSMP"],
        ["メイリオ", "meiryo"],
        ["ヒラギノ角ゴ Pro", "Hiragino Kaku Gothic Pro"],
        ["ヒラギノ明朝 Pro", "Hiragino Mincho Pro"],
        ["ヒラギノ丸ゴ ProN", "Hiragino Maru Gothic ProN"],
        ["Times New Roman", "Times New Roman"],
        ["Courier New", "Courier New"],
        ["Consolas", "Consolas"],
        ["Arial", "Arial"],
        ["Arial Unicode MS", "Arial Unicode MS"],
        ["Verdana", "Verdana"],
        ["Trebuchet MS", "Trebuchet MS"],
        ["Segoe UI Symbol", "Segoe UI Symbol"],
        ["Segoe UI Emoji", "Segoe UI Emoji"],
        ["Symbola", "Symbola"],
        ["Noto Emoji", "Noto Emoji"],
      ]),
      "font",
    );
    this.setOutput(true, null);
    this.setColour(150);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.Blocks["draw_text"] = {
  init: function () {
    this.appendValueInput("x").setCheck("Number").appendField("(");
    this.appendValueInput("y").setCheck("Number").appendField(",");
    this.appendValueInput("text").setCheck(null).appendField(")に文字列");
    this.appendDummyInput().appendField("を描画する");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(150);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};
