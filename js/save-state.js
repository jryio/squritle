var s = document.createElement("script");
var s2 = document.createElement("script");
s.type='text/javascript';
s2.type="text/javascript";
s.src=chrome.extension.getURL("js/State.js");
s2.src=chrome.extension.getURL("js/API.js");
document.body.appendChild(s);
document.body.appendChild(s2);

var getSelectedText = function () {
    var text = "";
    if (typeof window.getSelection != "undefined") {
        text = window.getSelection().toString();
    } else if (typeof document.selection != "undefined" && document.selection.type == "Text") {
        text = document.selection.createRange().text;
    }
    return text;
}

var saveState = function () {
    var offset = $(window).scrollTop();
    var highlighted = new Highlight(getSelectedText());
    var s = new State(offset, highlighted);
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

        value = $(this).val();

        // special handling if it's a checkbox
        if ($(this).attr("type") === "checkbox") {
            value = $(this).prop('checked');
        }

        var f = new Input(type, identification, value, elType);
        s.addInput(f);
    });

    var hash = generateHash(s);
    //window.prompt("Copy link:", window.location.href + "?squirtle-hash=" + hash + "#endHash");
    base_link = /(.+)\?squirtle-hash/.exec(window.location.href);
    base_link = base_link == null ? window.location.href : base_link[1];
    //window.open(base_link + "?squirtle-hash=" + hash + "#endHash", "_blank");

    var link = base_link + "?squirtle-hash=" + hash;
    $.ajax({
            type: 'GET'
        ,   url: "https://api-ssl.bitly.com/v3/shorten?access_token=55328a486a54e320b4902d0d9f06c82b2c87b757&longUrl=" + link
    }).done(function(data) {
        window.prompt("Copy link:", data.data.url);
    });
}

saveState();
