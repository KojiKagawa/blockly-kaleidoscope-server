Blockly.JavaScript["change_color_interval_time"] = function (block) {
  var value_color_interval_time = Blockly.JavaScript.valueToCode(
    block,
    "Color_Interval_Time",
    Blockly.JavaScript.ORDER_ATOMIC,
  );
  // TODO: Assemble JavaScript into code variable.
  var code = `
  color_interval_time = ${value_color_interval_time} * 60; // 秒数 * フレームレート
  `;
  return code;
};

Blockly.JavaScript["change_hue"] = function (block) {
  var value_x_acceleration = Blockly.JavaScript.valueToCode(
    block,
    "x_acceleration",
    Blockly.JavaScript.ORDER_ATOMIC,
  );
  var value_hue = Blockly.JavaScript.valueToCode(
    block,
    "Hue",
    Blockly.JavaScript.ORDER_ATOMIC,
  );
  // TODO: Assemble JavaScript into code variable.
  var code = `
  hig_x_threshold = ${value_x_acceleration};
  add_Hue = ${value_hue};
  `;
  return code;
};

Blockly.JavaScript["change_saturation"] = function (block) {
  var value_y_acceleration = Blockly.JavaScript.valueToCode(
    block,
    "y_acceleration",
    Blockly.JavaScript.ORDER_ATOMIC,
  );
  var value_saturation = Blockly.JavaScript.valueToCode(
    block,
    "Saturation",
    Blockly.JavaScript.ORDER_ATOMIC,
  );
  // TODO: Assemble JavaScript into code variable.
  var code = `
  hig_y_threshold = ${value_y_acceleration};
  add_Saturation = ${value_saturation};
  `;
  return code;
};

Blockly.JavaScript["change_value"] = function (block) {
  var value_z_acceleration = Blockly.JavaScript.valueToCode(
    block,
    "z_acceleration",
    Blockly.JavaScript.ORDER_ATOMIC,
  );
  var value_value = Blockly.JavaScript.valueToCode(
    block,
    "Value",
    Blockly.JavaScript.ORDER_ATOMIC,
  );
  // TODO: Assemble JavaScript into code variable.
  var code = `
  hig_z_threshold = ${value_z_acceleration};
  add_Value = ${value_value};
  `;
  return code;
};
