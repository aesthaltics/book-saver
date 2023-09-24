import { searchForBooks } from "@/scripts/handleBooks";

chrome.runtime.onInstalled.addListener(function () {


	chrome.contextMenus.create({
		id: "searchForBook2",
		title: "Search for book 2",
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

	const books = await searchForBooks(info.linkUrl)

	chrome.tabs.sendMessage(tab.id, {
		books: books,
		message: "createBookList",
	});
});

console.log("running");
