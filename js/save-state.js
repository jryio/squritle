var s = document.createElement("script");
var s2 = document.createElement("script");
s.type='text/javascript';
s2.type="text/javascript";
s.src=chrome.extension.getURL("js/State.js");
s2.src=chrome.extension.getURL("js/API.js");
document.body.appendChild(s);
document.body.appendChild(s2);

var saveState = function () {
    var offset = $(window).scrollTop();
    var s = new State(offset);
    $('input, textarea').each(function() {
        if (!$(this).attr("id") && !$(this).attr("name")) return;

        var type = $(this).attr("id") ? "id" : "name";
        var elType = $(this).is("input") ? "input" : "textarea";
        var identification;
        if (type == "id") {
            identification = $(this).attr("id");
        } else {
            identification = $(this).attr("name");
        }

        var f = new Input(type, identification, $(this).val(), elType);
        s.addInput(f);
    });
    var hash = generateHash(s);
    window.prompt("Copy link:", window.location.href + "?squirtle-hash=" + hash + "#endHash");
}

saveState();
