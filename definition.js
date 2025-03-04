Blockly.Blocks['scan_card'] = {
  init: function() {
    this.jsonInit({
      "type": "scan_card",
      "message0": "rfid đọc thẻ",
      "output": "String",
      "colour": "#ae00ae",
      "tooltip": "Đọc giá trị id thẻ",
      "helpUrl": ""
    });
  }
};

Blockly.Python['scan_card'] = function(block) {
  var code = 'rfid.scan_card()';
  Blockly.Python.definitions_['import_rfid'] = 'from rfid import *';
  return code;
};

Blockly.Blocks['veml6040_sensor_detect_color'] = {
  init: function() {
    this.jsonInit({
      "type": "veml6040_sensor_detect_color",
      "message0": "cảm biến VEML6040 phát hiện màu %1",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "DETECT_COLOR",
          "options": [
            ["vàng", "yellow"],
            ["đỏ", "red"],
            ["xanh lá", "green"],
            ["xanh lơ", "cyan"],
            ["xanh dương", "blue"],
            ["hồng thẫm", "magenta"]
          ]
        }
      ],
      "output": "Boolean",
      "colour": "#ae00ae",
      "tooltip": "Phát hiện màu sắc cụ thể",
      "helpUrl": ""
    });
  }
};

Blockly.Python['veml6040_sensor_detect_color'] = function(block) {
  var detectColor = block.getFieldValue('DETECT_COLOR');
  var code = '(veml6040_sensor.Classify_Hue() == "' + detectColor + '")';
  return [code, Blockly.Python.ORDER_ATOMIC];
};



Blockly.Blocks['veml6040_sensor_read_lux'] = {
  init: function() {
    this.jsonInit({
      "type": "veml6040_sensor_read_lux",
      "message0": "cảm biến VEML6040 đọc độ sáng (lux)", 
      "output": "Number",
      "colour": "#ae00ae",
      "tooltip": "Đọc giá trị độ sáng lux",
      "helpUrl": ""
    });
  }
};

Blockly.Python['veml6040_sensor_read_lux'] = function(block) {
  var code = 'veml6040_sensor.get_lux()'; 
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Blocks['veml6040_sensor_read_cct'] = {
  init: function() {
    this.jsonInit({
      "type": "veml6040_sensor_read_cct",
      "message0": "cảm biến VEML6040 đọc nhiệt độ màu",
      "output": "Number",
      "colour": "#ae00ae",
      "tooltip": "Đọc giá trị nhiệt độ màu (CCT)",
      "helpUrl": ""
    });
  }
};

Blockly.Python['veml6040_sensor_read_cct'] = function(block) {
  var code = 'veml6040_sensor.get_cct()'; 
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python.definitions_['import_veml6040_sensor'] = 'from veml6040_sensor import VEML6040Sensor';
