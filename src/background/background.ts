chrome.runtime.onInstalled.addListener(function () {
	chrome.contextMenus.create({
		id: "searchForBook",
		title: "Search for book",
		contexts: ["link"],
	});
});

chrome.contextMenus.onClicked.addListener(async (info, tab) => {
	console.log(info);
	if (info.linkUrl === undefined) {
		console.log("no link url");
		return;
	}
	if (!tab?.id) {
		console.log("no tab");
		return;
	}

	chrome.tabs.sendMessage(tab.id, {
		message: "hello",
	});
});