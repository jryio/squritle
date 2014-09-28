var s = document.createElement("script");
s.type='text/javascript';
s.src=chrome.extension.getURL("js/State.js");
document.body.appendChild(s);

var saveState = function () {
    var offset = $(window).scrollTop();
    var s = new State(offset);
    $('input').each(function() {
        if (!$(this).attr("id") && !$(this).attr("name")) return;

        var type = $(this).attr("id") ? "id" : "name";
        var identification;
        if (type == "id") {
            identification = $(this).attr("id");
        } else {
            identification = $(this).attr("name");
        }

        var f = new TextInput(type, identification, $(this).val());
        s.addInput(f);
    });
    // call kevin's hash function with the state
    alert("state created");
    console.log(s);
}

saveState();
