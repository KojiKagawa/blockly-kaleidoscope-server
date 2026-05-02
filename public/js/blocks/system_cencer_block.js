Blockly.Blocks['setup_sensor'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("センサーの初期処理");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(60);
   this.setTooltip("");
   this.setHelpUrl("");
    }
};

Blockly.Blocks['setup_cencer_do'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(new Blockly.FieldNumber(100, 0), "interval")
          .appendField("ミリ秒間隔でジャイロセンサーを更新");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(60);
   this.setTooltip("");
   this.setHelpUrl("");
    }
};

  Blockly.Blocks['cencer_do_get'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("傾き")
          .appendField(new Blockly.FieldDropdown([["x","dox"], ["y","doy"], ["z","doz"]]), "get_do")
          .appendField("を取得");
      this.setOutput(true, "Number");
      this.setColour(60);
   this.setTooltip("スマホの傾き");//ブロック上にカーソルがある時に表示するメッセージ
   this.setHelpUrl("");//ヘルプページの追加
    }
};

Blockly.Blocks['cencer_do_get2'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("傾き2")
        .appendField(new Blockly.FieldDropdown([["x","dox"], ["y","doy"], ["z","doz"]]), "get_do")
        .appendField("を取得2");
    this.setOutput(true, "Number");
    this.setColour(60);
 this.setTooltip("スマホの傾き");//ブロック上にカーソルがある時に表示するメッセージ
 this.setHelpUrl("");//ヘルプページの追加
  }
};

Blockly.Blocks['cencer_dm_get'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("加速度")
          .appendField(new Blockly.FieldDropdown([["x","dmx"], ["y","dmy"], ["z","dmz"]]), "get_dm")
          .appendField("を取得");
      this.setOutput(true, null);
      this.setColour(60);
   this.setTooltip("");
   this.setHelpUrl("");
    }
};

  Blockly.Blocks['setup_cencer_dm'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(new Blockly.FieldNumber(100, 0), "interval")
          .appendField("ミリ秒間隔で加速度センサーを更新");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(60);
   this.setTooltip("");
   this.setHelpUrl("");
    }
};

Blockly.Blocks['cencer_get_dm_spd'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("速度")
          .appendField(new Blockly.FieldDropdown([["x","spd_x"], ["y","spd_y"], ["z","spd_z"]]), "spd")
          .appendField("を取得する");
      this.setOutput(true, null);
      this.setColour(60);
   this.setTooltip("");
   this.setHelpUrl("");
    }
};

  Blockly.Blocks['cencer_get_dm_dif'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("変位")
          .appendField(new Blockly.FieldDropdown([["x","dif_x"], ["y","dif_y"], ["z","dif_z"]]), "dif")
          .appendField("を取得する");
      this.setOutput(true, null);
      this.setColour(60);
   this.setTooltip("");
   this.setHelpUrl("");
    }
};

Blockly.Blocks['cencer_get_touch'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("タッチされた座標")
        .appendField(new Blockly.FieldDropdown([["x","touch_x"], ["y","touch_y"]]), "pos")
        .appendField("を取得する");
    this.setOutput(true, null);
    this.setColour(60);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['remove_cencer_do'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("ジャイロセンサーを終了する");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(60);
   this.setTooltip("");
   this.setHelpUrl("");
    }
};

  Blockly.Blocks['remove_cencer_dm'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("加速度センサーを終了する");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(60);
   this.setTooltip("");
   this.setHelpUrl("");
    }
};

Blockly.Blocks['remove_cencer_touch'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("タッチセンサーを終了する");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(60);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
