Blockly.JavaScript['create_windowsize_canvas'] = function(block) {
  var colour_background = block.getFieldValue('background');
  var statements_use_canvas = Blockly.JavaScript.statementToCode(block, 'use_canvas');
  // TODO: Assemble JavaScript into code variable.
  var code = 'await Canvas.CreateCanvas(window.innerWidth, window.innerHeight, null, \''+colour_background+'\');\n'+statements_use_canvas;
  return code;
};