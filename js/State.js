var State = function (offset, highlight) {
    this.offset = offset;
    this.highlight = highlight;
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

// the words to highlight. note that the word may not be unique..
var Highlight = function (text) {
    this.text = text;
}
