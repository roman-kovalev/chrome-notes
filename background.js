chrome.runtime.onInstalled.addListener(function() {
    chrome.commands.onCommand.addListener(function(command) {
        console.log("Command: ", command);

        runIt();
    });
});

function runIt() {

chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.executeScript(
        tabs[0].id,
        {file: "testrunner.js"}
    );
});

}
