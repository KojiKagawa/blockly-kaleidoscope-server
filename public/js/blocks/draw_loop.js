Blockly.JavaScript["draw_loop"] = function (block) {
  var statements_loop = Blockly.JavaScript.statementToCode(block, "loop");
  // TODO: Assemble JavaScript into code variable.
  // var code = 'if((orientation_list.length >= loop_num) && touch_flag) {\n  shape_count = 0;\n' + statements_loop + '}\n';
  var code = `
  if((orientation_list.length >= loop_num) && start_touch_flag && end_touch_flag) { // 図形の描画を開始する
    shape_count = 0;
    ${statements_loop}
  }
  `;
  return code;
};
