var State = function (offset) {
    this.offset = offset;
    this.inputs = [];
    this.addInput = function (input) {
        this.inputs.append(input);
    }
}

var Input = function (attribute, id, type, value) {
    this.attributeType = attribute;
    this.id = id;
    this.type = type;
    this.value = value;
}

var TextInput = function (attribute, id, value, type) {
    this.base = Input;
    this.base(attribute, id, "text");
    this.value = value;
}

TextInput.prototype = Input

var CheckboxInput = function(attribute, id, value) {
    this.base = Input;
    this.base(attribute, id, "checkbox");
    this.value = value;
}

var RadioButtonsInput = function(attribute, id, value) {
    this.base = Input;
    this.base(attribute, id, "radiobutton");
    this.value = value;
}



