var saveState = function () {
    chrome.tabs.executeScript({file: "js/save-state.js"}, function () {});
};

chrome.browserAction.onClicked.addListener(function(tab) {
    saveState();
});
