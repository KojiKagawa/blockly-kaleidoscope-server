Blockly.JavaScript['draw_mirror'] = function(block) {
  var colour_stroke_color = block.getFieldValue('stroke_color');
  var dropdown_isdraw = block.getFieldValue('isdraw');
  // TODO: Assemble JavaScript into code variable.

  let isdraw;
  switch (dropdown_isdraw) {
    case 'draw' : 
      isdraw = `
      // 鏡を描画する
      Canvas.StyleStrokeColor('${colour_stroke_color}');
      Canvas.DrawLine(-(window.innerHeight / 2) / -Math.sqrt(3) + (window.innerWidth / 2), window.innerHeight, (window.innerHeight / 2) / -Math.sqrt(3) + (window.innerWidth / 2), 0, );
      Canvas.DrawLine(0, window.innerHeight / 2, window.innerWidth, window.innerHeight / 2, );
      Canvas.DrawLine((window.innerHeight / 2) / Math.sqrt(3) + (window.innerWidth / 2), 0, -(window.innerHeight / 2) / Math.sqrt(3) + (window.innerWidth / 2), window.innerHeight, );
      `; 
      break;
    case 'clear' : isdraw = '\n';  break;
    default : isdraw = null;
  }

  var code = isdraw;

  return code;
};