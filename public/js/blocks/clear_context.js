Blockly.JavaScript["clear_context"] = function (block) {
  // TODO: Assemble JavaScript into code variable.
  var code = `
  // context.clearRect(200, 200, 200, 200);
  // Canvas.fillStyle = "rgb(0, 0, 0)";
  // Canvas.fillRect(0,0,600,600);

  // context.moveTo(0, 0);
  // context.lineTo(600, 0);
  // context.lineTo(600, 600);
  // context.lineTo(0, 600);
  // context.closePath();
  // context.fill();

  // context.moveTo(0, 0);
  // context.lineTo(800, 0);
  // context.lineTo(800, 1000);
  // context.lineTo(0, 1000);
  // context.closePath();
  // context.fill();

  context.beginPath();

  `;
  return code;
};
