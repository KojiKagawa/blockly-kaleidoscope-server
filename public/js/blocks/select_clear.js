Blockly.JavaScript['select_clear'] = function(block) {
  var dropdown_isclear = block.getFieldValue('isclear');
  // TODO: Assemble JavaScript into code variable.

  let isclear;
  switch (dropdown_isclear) {
    case 'clear' : 
      isclear = 'await Canvas.ClearCanvas();\n'; 
      break;
    case 'remain' : isclear = '\n';  break;
    default : isclear = null;
  }

  var code = isclear;

  return code;
};