var State = function (offset) {
    this.offset = offset;
    this.inputs = [];
    this.addInput = function (input) {
        this.inputs.push(input);
    }
}

var Input = function (attribute, id, value, type) {
    this.attributeType = attribute; // id or name
    this.id = id; // gonna be the value of the attribute; so like id=id, or id=name;
    this.value = value;
    this.type = type;
}
