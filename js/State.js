var State = function (offset) {
    this.offset = offset;
    this.inputs = [];
    this.addInput = function (input) {
        this.inputs.push(input);
    }
}

var thing = "hello";

var Input = function (attribute, id, type) {
    this.attributeType = attribute; // id or name
    this.id = id; // gonna be the value of the attribute; so like id=id, or id=name
    this.type = type;
}

var TextInput = function (attribute, id, value) {
    this.base = Input;
    this.base(attribute, id, "text");
    this.value = value;
}

TextInput.prototype = Input
