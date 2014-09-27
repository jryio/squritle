var State = function (offset) {
    this.offset = offset;
    this.inputs = [];
    this.addInput = function (input) {
        this.inputs.append(input);
    }
}

var Input = function (attribute, id, type) {
    this.attributeType = attribute;
    this.id = id;
    this.type = type;
}

var TextInput = function (attribute, id, value) {
    this.base = Input;
    this.base(attribute, id, "text");
    this.value = value;
}

TextInput.prototype = Input

// support for other inputs like radio, checkbox later
