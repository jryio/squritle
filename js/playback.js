$(document).ready(function() {
    var href = window.location.href;
    if (href.indexOf("?squirtle-hash=") !== -1) {
        href = href.slice(href.indexOf("?squirtle-hash=") + "?squirtle-hash=".length);
        var hashCode = href.slice(0, href.indexOf("#endHash"));

        // decrypt the hash with kevin's function, which should return an array of Steps
        // iterate through each Step and exectute the action
        // etc, a scroll step, a highlight step, etc.
    
    }
});

var scrolling = function (finish) {
	$('html,body').animate({
		scrollTop: finish
	}, 'swing', 1000);
};

var fillForms =  function (forms) {
	for (var form in forms) {
		selector = "[" + forms.attribute + "=" + form + "]"
		$('html').find(selector).val = forms[form];
	}
}

// var mouseMove = function () {
// 	$('body').css('cursor','none');
// 	$('body').prepend("<img id=cursor4432 src='http://i.stack.imgur.com/sAqmU.png' >");
// 	$("#cursor").animate({
// 			left: 
// 		,	right: 
	
// 	}, 400);

// }






