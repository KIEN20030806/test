Blockly.Blocks["scan_card"] = {
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

Blockly.Blocks['scan_and_add_card'] = {
  init: function() {
    this.jsonInit({
      "type": "scan_and_add_card",
      "message0": "quét và thêm thẻ RFID vào danh sách %1",
      "args0": [
        {
          "type": "input_value",
          "name": "LISTNAME",
          "check": "String"
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#00aeae",
      "tooltip": "Quét thẻ RFID và thêm vào danh sách",
      "helpUrl": ""
    });
  }
};

Blockly.Python['scan_and_add_card'] = function(block) {
  var listname = Blockly.Python.valueToCode(block, 'LISTNAME', Blockly.Python.ORDER_ATOMIC) || "''";
  Blockly.Python.definitions_['import_rfid'] = 'from rfid import *'; 
  var code = "rfid.scan_and_add_card(" + listname + ")\n";
  return code;
};

Blockly.Blocks['scan_and_check'] = {
  init: function() {
    this.jsonInit({
      "type": "scan_and_check",
      "message0": "qquét và kiểm tra thẻ trong danh sách %1",
      "args0": [
        {
          "type": "input_value",
          "name": "LISTNAME",
          "check": "String"
        }
      ],
      "output": "Boolean",
      "colour": "#ff8800",
      "tooltip": "Quét thẻ RFID và kiểm tra xem có trong danh sách không",
      "helpUrl": ""
    });
  }
};

Blockly.Python['scan_and_check'] = function(block) {
  var listname = Blockly.Python.valueToCode(block, 'LISTNAME', Blockly.Python.ORDER_ATOMIC) || "''";
  Blockly.Python.definitions_['import_rfid'] = 'from rfid import *'; 
  var code = "rfid.scan_and_check(" + listname + ")";
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Blocks['scan_and_remove_card'] = {
  init: function() {
    this.jsonInit({
      "type": "scan_and_remove_card",
      "message0": "quét và xóa thẻ khỏi danh sách %1",
      "args0": [
        {
          "type": "input_value",
          "name": "LISTNAME",
          "check": "String"
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#ff0000",
      "tooltip": "Quét thẻ RFID và xóa khỏi danh sách nếu tồn tại",
      "helpUrl": ""
    });
  }
};

Blockly.Python['scan_and_remove_card'] = function(block) {
  var listname = Blockly.Python.valueToCode(block, 'LISTNAME', Blockly.Python.ORDER_ATOMIC) || "''";
  Blockly.Python.definitions_['import_rfid'] = 'from rfid import *'; 
  var code = "rfid.scan_and_remove_card(" + listname + ")\n";
  return code;
};

Blockly.Blocks['clear_list'] = {
  init: function() {
    this.jsonInit({
      "type": "clear_list",
      "message0": "xóa danh sách %1",
      "args0": [
        {
          "type": "input_value",
          "name": "LISTNAME",
          "check": "String"
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#8B0000",
      "tooltip": "Xóa danh sách thẻ RFID và file lưu trữ",
      "helpUrl": ""
    });
  }
};

Blockly.Python['clear_list'] = function(block) {
  var listname = Blockly.Python.valueToCode(block, 'LISTNAME', Blockly.Python.ORDER_ATOMIC) || "''";
  Blockly.Python.definitions_['import_rfid'] = 'from rfid import *'; 
  var code = "rfid.clear_list(" + listname + ")\n";
  return code;
};
