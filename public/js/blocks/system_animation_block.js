Blockly.Blocks['anims_loop_2'] = {
    init: function() {
      this.appendValueInput("NAME")
          .setCheck(null)
          .appendField("描写ループ")
          .appendField(new Blockly.FieldDropdown([["終わる条件","break"], ["続ける条件","continue"]]), "conditions");
       this.appendValueInput("fps_num")
           .setCheck("Number")
           .setAlign(Blockly.ALIGN_RIGHT)
           .appendField("FPS");
      this.appendStatementInput("loop")
          .setCheck(null)
          .appendField("実行");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.Blocks['anims_break'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("描画ループを終了する");
      this.setPreviousStatement(true, null);
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };
