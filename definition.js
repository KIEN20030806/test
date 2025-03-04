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


Blockly.Blocks['read_relay_status_at_address'] = {
  init: function () {
    this.jsonInit({
      "type": "read_relay_status_at_address",
      "message0": "kênh đọc trạng thái địa chỉ %1%2",
      "args0": [
        {
          "type": "input_value",
          "name": "address",
          "check": "Number"
        },
        { "type": "input_dummy" }
      ],
      "output": "Number",
      "colour": "#18820c",
      "tooltip": "Đọc trạng thái của relay tại địa chỉ được nhập",
      "helpUrl": ""
    });
  }
};

Blockly.Python['read_relay_status_at_address'] = function (block) {
  Blockly.Python.definitions_['import_relay_driver'] = 'from relay_4chs import *';
  
  var relay = block.getFieldValue('relay');
  var address = Blockly.Python.valueToCode(block, 'address', Blockly.Python.ORDER_ATOMIC);

  Blockly.Python.definitions_['relay_init_' + address] = `relay_${address} = RelayController(${address})`;  
  var code = `relay_${address}.get_relay(${relay})\n`;  // Đọc trạng thái relay
  
  return [code, Blockly.Python.ORDER_ATOMIC];
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

Blockly.Python['scan_and_add_card'] = function(block) {
  var listname = Blockly.Python.valueToCode(block, 'LISTNAME', Blockly.Python.ORDER_ATOMIC) || "''";
  Blockly.Python.definitions_['import_rfid'] = 'from rfid import *'; 
  var code = "rfid.scan_and_add_card(" + listname + ")\n";
  return code;
};