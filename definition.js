Blockly.Blocks['scan_card'] = {
  init: function() {
    this.jsonInit({
      "type": "scan_card",
      "message0": "rfid đọc thẻ",
      "output": "String",
      "colour": "#00aeae",
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
      "message0": "quét và thêm thẻ RFID vào danh sách %1%2",
      "args0": [
        {
          "type": "input_value",
          "name": "LISTNAME",
          "check": "String"
        },
        { "type": "input_dummy" }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#00aeae",
      "tooltip": "Quét thẻ RFID và thêm vào danh sách",
      "helpUrl": ""
    });
  }
};


Blockly.Blocks['change_relay_address'] = {
  init: function () {
    this.jsonInit({
      "type": "change_relay_address",
      "message0": "relay 4 kênh đổi địa chỉ relay %1 %2 thành %3",
      "args0": [
        {
          "type": "input_value",
          "name": "old_address",
          "check": "Number"
        },
        { "type": "input_dummy" },
        {
          "type": "input_value",
          "name": "new_address",
          "check": "Number"
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#18820c",
      "tooltip": "Đổi địa chỉ của một relay từ địa chỉ cũ sang địa chỉ mới",
      "helpUrl": ""
    });
  }
};

Blockly.Python['change_relay_address'] = function (block) {
  Blockly.Python.definitions_['import_relay_driver'] = 'from relay_4chs import *';
  var old_address = Blockly.Python.valueToCode(block, 'old_address', Blockly.Python.ORDER_ATOMIC);
  var new_address = Blockly.Python.valueToCode(block, 'new_address', Blockly.Python.ORDER_ATOMIC);
  Blockly.Python.definitions_['relay_init_' + old_address] = `relay_${old_address} = RelayController(${old_address})`;
  
  var code = "";
  code += `relay_${old_address}.change_relay_address(${new_address})\n`;
  code += `relay_${new_address} = RelayController(${new_address})\n`;
  code += `time.sleep_ms(100)\n`;
  return code;
};