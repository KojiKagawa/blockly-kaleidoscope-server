Blockly.JavaScript['turtle_pen'] = function(block) {
  var updown = block.getFieldValue('Turtle_pen');
  var code = 'Canvas.pen'+ updown +'();\n';
  return code;
};

Blockly.JavaScript['turtle_roll'] = function(block) {
  var value_roll = Blockly.JavaScript.valueToCode(block, 'roll', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'Canvas.turn('+ value_roll +');\n';
  return code;
};

Blockly.JavaScript['turtle_dir'] = function(block) {
  var value_dir = Blockly.JavaScript.valueToCode(block, 'dir', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'Canvas.direction('+ value_dir +');\n';
  return code;
};


Blockly.JavaScript['turtle_forward'] = function(block) {
  var dropdown_turtle_forward = block.getFieldValue('Turtle_forward');
  var value_step = Blockly.JavaScript.valueToCode(block, 'step', Blockly.JavaScript.ORDER_ATOMIC);
  let goback;
  switch(dropdown_turtle_forward){
    case 'forward' : goback = 1; break;
    case 'back' : goback = -1; break;
//    default : goback = 1;
  }
  //value_step *= goback;
  var code = 'Canvas.forward('+ value_step +'*'+ goback +');\n';
  return code;
};

Blockly.JavaScript['turtle_go'] = function(block) {
  var value_posx = Blockly.JavaScript.valueToCode(block, 'posx', Blockly.JavaScript.ORDER_ATOMIC);
  var value_posy = Blockly.JavaScript.valueToCode(block, 'posy', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'Canvas.go('+ value_posx +','+ value_posy +');\n';
  return code;
};
Blockly.JavaScript['turtle_xpos'] = function(block) {
  var code = '__turtleX';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['turtle_ypos'] = function(block) {
  var code = '__turtleY';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['turtle_angle'] = function(block) {
  var code = '__turtleHeading';
  return [code, Blockly.JavaScript.ORDER_NONE];
};
