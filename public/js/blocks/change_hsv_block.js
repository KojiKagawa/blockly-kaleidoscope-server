Blockly.Blocks["change_color_interval_time"] = {
  init: function () {
    this.appendValueInput("Color_Interval_Time")
      .setCheck("Number")
      .appendField("色を変化させる間隔を");
    this.appendDummyInput().appendField("秒にする");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.Blocks["change_hue"] = {
  init: function () {
    this.appendValueInput("x_acceleration")
      .setCheck("Number")
      .appendField("x軸の加速度が");
    this.appendValueInput("Hue")
      .setCheck("Number")
      .appendField("を超えたとき、色相(0度~360度)を");
    this.appendDummyInput().appendField("度ずらす");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.Blocks["change_saturation"] = {
  init: function () {
    this.appendValueInput("y_acceleration")
      .setCheck("Number")
      .appendField("y軸の加速度が");
    this.appendValueInput("Saturation")
      .setCheck("Number")
      .appendField("を超えたとき、彩度(0~255)を");
    this.appendDummyInput().appendField("増やす");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.Blocks["change_value"] = {
  init: function () {
    this.appendValueInput("z_acceleration")
      .setCheck("Number")
      .appendField("z軸の加速度が");
    this.appendValueInput("Value")
      .setCheck("Number")
      .appendField("を超えたとき、明度(0~255)を");
    this.appendDummyInput().appendField("増やす");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};
