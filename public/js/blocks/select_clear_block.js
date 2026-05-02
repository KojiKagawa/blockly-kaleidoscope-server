Blockly.Blocks['select_clear'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("キャンバスの内容を")
        .appendField(new Blockly.FieldDropdown([["削除する","clear"], ["削除しない","remain"]]), "isclear");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};