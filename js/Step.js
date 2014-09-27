var Coord = function (x, y) {
    this.x = x;
    this.y = y;
}

var Step = function (type) {
    this.type = type;
}

var ScrollStep = function (offset) {
    this.base = Step;
    this.base("scroll");
    this.offset = offset;
}

ScrollStep.prototype = Step;

var InputStep = function (form, text) {
    this.base = Step;
    this.base("input");
    this.form = form;
    this.text = text;
}

InputStep.prototype = Step;

// here, nw, ne, etc are all Coord objects defining the highlightable rectangle
var HighlightStep = function (nw, ne, sw, se) {
    this.base = Step;
    this.base("highlight");
    this.nw = nw;
    this.ne = ne;
    this.sw = sw;
    this.se = se;
}

HighlightStep.prototype = Step;
