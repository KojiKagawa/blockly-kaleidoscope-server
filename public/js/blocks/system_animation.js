Blockly.JavaScript['anims_loop_2'] = function(block) {
    var dropdown_conditions = block.getFieldValue('conditions');
    var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
    // var value_fps_num = Blockly.JavaScript.valueToCode(block, 'fps_num', Blockly.JavaScript.ORDER_ATOMIC);
    var value_fps_num = 0;
    var statements_loop = Blockly.JavaScript.statementToCode(block, 'loop');
    // TODO: Assemble JavaScript into code variable.
    let cond = '';
    switch( dropdown_conditions ) {
      case 'break' : cond = value_name; break;
      case 'continue' : cond = '!( ' + value_name + ' )'; break;
      default: cond = 'null';
    }
    cond = 'if (' + cond + ') { return false; }\n';
    var code = `var interval = await Utilities.AnimsLoopn(`+value_fps_num+`, async ()=>{`+cond+statements_loop+` return true; });\n`;
    return code;
};

Blockly.JavaScript['anims_break'] = function(block) {
    // TODO: Assemble JavaScript into code variable.
    var code = 'return false;\n';
    return code;
};