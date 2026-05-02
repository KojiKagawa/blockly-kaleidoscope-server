Blockly.JavaScript['style_stroke_wide'] = function(block) {
  var value_num = Blockly.JavaScript.valueToCode(block, 'num', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'Canvas.StyleStrokeWide('+value_num+');\n';
  return code;
};

Blockly.JavaScript['style_fill_color'] = function(block) {
  var value__color = Blockly.JavaScript.valueToCode(block, '_color', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'Canvas.StyleFillColor('+value__color+');\n';
  return code;
};

Blockly.JavaScript['style_fill_transparent'] = function(block) {
  var value__alpha = Blockly.JavaScript.valueToCode(block, '_alpha', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'Canvas.StyleFillTransparent('+value__alpha+');\n';
  return code;
};

Blockly.JavaScript['style_stroke_color'] = function(block) {
  var value_color = Blockly.JavaScript.valueToCode(block, 'color', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'Canvas.StyleStrokeColor('+value_color+');\n';
  return code;
};

Blockly.JavaScript['style_stroke_transparent'] = function(block) {
  var value_alpha = Blockly.JavaScript.valueToCode(block, 'alpha', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'Canvas.StyleStrokeTransparent('+value_alpha+');\n';
  return code;
};