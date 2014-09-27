$(document).ready(function() {
    var href = window.location.href;
    if (href.indexOf("?squirtle-hash=") !== -1) {
        href = href.slice(href.indexOf("?squirtle-hash=") + "?squirtle-hash=".length);
        var hashCode = href.slice(0, href.indexOf("#endHash"));

        // decrypt the hash with kevin's function, which should return an array of Steps
        // iterate through each Step and exectute the action
        // etc, a scroll step, a highlight step, etc.
    
    }
})
