Blockly.JavaScript['canvas_translate'] = function(block) {
    var value_translate_x = Blockly.JavaScript.valueToCode(block, 'translate_x', Blockly.JavaScript.ORDER_ATOMIC);
    var value_translate_y = Blockly.JavaScript.valueToCode(block, 'translate_y', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = 'await Canvas.TranslateCanvas('+value_translate_x+', '+value_translate_y+');\n';
    return code;
};
  
Blockly.JavaScript['canvas_rotate'] = function(block) {
    var value_rotate = Blockly.JavaScript.valueToCode(block, 'rotate', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = 'await Canvas.RotateCanvas('+value_rotate+');\n';
    return code;
};

Blockly.JavaScript['context_save'] = function(block) {
    // TODO: Assemble JavaScript into code variable.
    var code = 'await Canvas.SaveContext();';
    return code;
};
  
Blockly.JavaScript['context_restore'] = function(block) {
    // TODO: Assemble JavaScript into code variable.
    var code = 'await Canvas.RestoreContext();';
    return code;
};

Blockly.JavaScript['create_canvas'] = function(block) {
    var number_c_width = block.getFieldValue('c_width');
    var number_c_height = block.getFieldValue('c_height');
    var colour_background = block.getFieldValue('background');
    var statements_use_canvas = Blockly.JavaScript.statementToCode(block, 'use_canvas');
    // TODO: Assemble JavaScript into code variable.
    var code = 'await Canvas.CreateCanvas('+number_c_width+', '+number_c_height+', null, \''+colour_background+'\');\n'+statements_use_canvas;
    return code;
};
  
Blockly.JavaScript['allclear_canvas'] = function(block) {
    // TODO: Assemble JavaScript into code variable.
    var code = 'await Canvas.ClearCanvas();\n';
    return code;
};
  
Blockly.JavaScript['fill_rect'] = function(block) {
    var value_rect_x = Blockly.JavaScript.valueToCode(block, 'rect_x', Blockly.JavaScript.ORDER_ATOMIC);
    var value_rect_y = Blockly.JavaScript.valueToCode(block, 'rect_y', Blockly.JavaScript.ORDER_ATOMIC);
    var value_rect_x2 = Blockly.JavaScript.valueToCode(block, 'rect_x2', Blockly.JavaScript.ORDER_ATOMIC);
    var value_rect_y2 = Blockly.JavaScript.valueToCode(block, 'rect_y2', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = 'await Canvas.DrawRect('+value_rect_x+', '+value_rect_y+', '+value_rect_x2+', '+value_rect_y2+');\n';
    return code;
};

Blockly.JavaScript['fill_circle'] = function(block) {
  var value_point_x = Blockly.JavaScript.valueToCode(block, 'point_x', Blockly.JavaScript.ORDER_ATOMIC);
  var value_point_y = Blockly.JavaScript.valueToCode(block, 'point_y', Blockly.JavaScript.ORDER_ATOMIC);
  var value_radius = Blockly.JavaScript.valueToCode(block, 'radius', Blockly.JavaScript.ORDER_ATOMIC);
  var colour_color = block.getFieldValue('color');
  // TODO: Assemble JavaScript into code variable.
  var code = 'Canvas.FillCircle('+value_point_x+', '+value_point_y+', '+value_radius+', "'+colour_color+'");\n';
  return code;
};

Blockly.JavaScript['fill_triangle'] = function(block) {
  var value_x1 = Blockly.JavaScript.valueToCode(block, 'x1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y1 = Blockly.JavaScript.valueToCode(block, 'y1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_x2 = Blockly.JavaScript.valueToCode(block, 'x2', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y2 = Blockly.JavaScript.valueToCode(block, 'y2', Blockly.JavaScript.ORDER_ATOMIC);
  var value_x3 = Blockly.JavaScript.valueToCode(block, 'x3', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y3 = Blockly.JavaScript.valueToCode(block, 'y3', Blockly.JavaScript.ORDER_ATOMIC);
  var colour_color = block.getFieldValue('color');
  // TODO: Assemble JavaScript into code variable.
  var code = 'Canvas.FillTriangle('+value_x1+', '+value_y1+', '+value_x2+', '+value_y2+', '+value_x3+', '+value_y3+', "'+colour_color+'");\n';  
  return code;
};
