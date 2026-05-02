Blockly.Blocks['save_orientation_list'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("傾きセンサと加速度センサの値を任意の時間で保存する")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};