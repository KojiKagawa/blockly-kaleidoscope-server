Blockly.JavaScript['draw_triangle'] = function(block) {
  var value_x1 = Blockly.JavaScript.valueToCode(block, 'x1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y1 = Blockly.JavaScript.valueToCode(block, 'y1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_x2 = Blockly.JavaScript.valueToCode(block, 'x2', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y2 = Blockly.JavaScript.valueToCode(block, 'y2', Blockly.JavaScript.ORDER_ATOMIC);
  var value_x3 = Blockly.JavaScript.valueToCode(block, 'x3', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y3 = Blockly.JavaScript.valueToCode(block, 'y3', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_isfill = block.getFieldValue('isfill');
  // TODO: Assemble JavaScript into code variable.
  let isfill;
  switch (dropdown_isfill) {
    case 'draw' : isfill = false; break;
    case 'fill' : isfill = true;  break;
    default : isfill = null;
  }
  var code = 'Canvas.DrawTriangle(' + value_x1 +', '
                                    + value_y1 +', '
                                    + value_x2 +', '
                                    + value_y2 +', '
                                    + value_x3 +', '
                                    + value_y3 +', '
                                    + isfill
                                    +');\n';
  return code;
};

Blockly.JavaScript['draw_rect'] = function(block) {
  var value_rect_x = Blockly.JavaScript.valueToCode(block, 'rect_x', Blockly.JavaScript.ORDER_ATOMIC);
  var value_rect_y = Blockly.JavaScript.valueToCode(block, 'rect_y', Blockly.JavaScript.ORDER_ATOMIC);
  var value_rect_x2 = Blockly.JavaScript.valueToCode(block, 'rect_x2', Blockly.JavaScript.ORDER_ATOMIC);
  var value_rect_y2 = Blockly.JavaScript.valueToCode(block, 'rect_y2', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_isfill = block.getFieldValue('isfill');
  // TODO: Assemble JavaScript into code variable.
  let isfill;
  switch (dropdown_isfill) {
    case 'draw' : isfill = false; break;
    case 'fill' : isfill = true;  break;
    default : isfill = null;
  }
  var code = 'Canvas.DrawRect(' + value_rect_x + ', '
                                + value_rect_y + ', '
                                + value_rect_x2 + ', '
                                + value_rect_y2 + ', '
                                + isfill
                                +');\n';
  return code;
};

Blockly.JavaScript['draw_circle'] = function(block) {
  var value_point_x = Blockly.JavaScript.valueToCode(block, 'point_x', Blockly.JavaScript.ORDER_ATOMIC);
  var value_point_y = Blockly.JavaScript.valueToCode(block, 'point_y', Blockly.JavaScript.ORDER_ATOMIC);
  var value_radius = Blockly.JavaScript.valueToCode(block, 'radius', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_isfill = block.getFieldValue('isfill');
  // TODO: Assemble JavaScript into code variable.
  let isfill;
  switch (dropdown_isfill) {
    case 'draw' : isfill = false; break;
    case 'fill' : isfill = true;  break;
    default : isfill = null;
  }
  var code = 'Canvas.DrawCircle(' + value_point_x + ', '
                                  + value_point_y + ', ' 
                                  + value_radius  + ', ' 
                                  + isfill 
                                  +');\n';
  return code;
};

Blockly.JavaScript['draw_circle2'] = function(block) {
  var value_point_x = Blockly.JavaScript.valueToCode(block, 'point_x', Blockly.JavaScript.ORDER_ATOMIC);
  var value_point_y = Blockly.JavaScript.valueToCode(block, 'point_y', Blockly.JavaScript.ORDER_ATOMIC);
  var value_width = Blockly.JavaScript.valueToCode(block, 'width', Blockly.JavaScript.ORDER_ATOMIC);
  var value_height = Blockly.JavaScript.valueToCode(block, 'height', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_isfill = block.getFieldValue('isfill');
  // TODO: Assemble JavaScript into code variable.
  let isfill;
  switch (dropdown_isfill) {
    case 'draw' : isfill = false; break;
    case 'fill' : isfill = true;  break;
    default : isfill = null;
  }
  var code = 'Canvas.DrawEllipse2(' + value_point_x + ', '
                                    + value_point_y + ', '
                                    + value_width   + ', '
                                    + value_height  + ', '
                                    + isfill
                                    +');\n';
  return code;
};

Blockly.JavaScript['draw_circle3'] = function(block) {
  var value_point_x = Blockly.JavaScript.valueToCode(block, 'point_x', Blockly.JavaScript.ORDER_ATOMIC);
  var value_point_y = Blockly.JavaScript.valueToCode(block, 'point_y', Blockly.JavaScript.ORDER_ATOMIC);
  var value_width = Blockly.JavaScript.valueToCode(block, 'width', Blockly.JavaScript.ORDER_ATOMIC);
  var value_height = Blockly.JavaScript.valueToCode(block, 'height', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_isfill = block.getFieldValue('isfill');
  // TODO: Assemble JavaScript into code variable.
  let isfill;
  switch (dropdown_isfill) {
    case 'draw' : isfill = false; break;
    case 'fill' : isfill = true;  break;
    default : isfill = null;
  }
  var code = 'Canvas.DrawEllipse('  + value_point_x + ', '
                                    + value_point_y + ', '
                                    + value_width   + ', '
                                    + value_height  + ', '
                                    + isfill
                                    +');\n';
  return code;
};

Blockly.JavaScript['draw_line'] = function(block) {
  var value_x1 = Blockly.JavaScript.valueToCode(block, 'x1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y1 = Blockly.JavaScript.valueToCode(block, 'y1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_x2 = Blockly.JavaScript.valueToCode(block, 'x2', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y2 = Blockly.JavaScript.valueToCode(block, 'y2', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'Canvas.DrawLine(' + value_x1 + ', '
                                + value_y1 + ', '
                                + value_x2 + ', '
                                + value_y2 + ', '
                                +');\n';
  return code;
};

Blockly.JavaScript['draw_point'] = function(block) {
  var value_x = Blockly.JavaScript.valueToCode(block, 'x', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y = Blockly.JavaScript.valueToCode(block, 'y', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'Canvas.DrawPoint('+value_x+', '+value_y+');\n';
  return code;
};