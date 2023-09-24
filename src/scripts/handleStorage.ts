

const storedBooksKey = "savedBooks";
const storedSearchLinksKey = "searchLinks";

const saveBook = async (book: Book) => {
	await storeData(storedBooksKey, book);
};

const getSavedBooks = async (key?: string) => {
	if (key === undefined) {
		key = storedBooksKey;
	}
	return await getData(key);
};

const saveSearchLink = async (searchLink: SearchLink) => {
	await storeData(storedSearchLinksKey, searchLink);
};

const getSavedSearchLinks = async () => {
	return await getData(storedSearchLinksKey);
};

const updateSearchLink = async (searchLink: SearchLink) => {
	updateItem(storedSearchLinksKey, searchLink);
};

const updateItem = async (key: string, item: any) => {
	let storedDataArray = await getData(key);
	await removeElement(key, item);
	await storeData(key, item);
	await logQuota();
	await showData(key);
};

const storeData = async (key: string, data: any) => {
	let storedDataArray = await getData(key);
	if (storedDataArray === undefined) {
		storedDataArray = [];
	}
	console.log(storedDataArray);
	console.log(data);
	if (storedDataArray.some((item: any) => item.id === data.id)) {
		console.log("Already saved");
		return;
	}
	await storedDataArray.push(data);
	await chrome.storage.local.set({ [key]: [...new Set(storedDataArray)] });
	console.log("Saved");
	console.log(await getData(key));
	await logQuota();
};

const getData = async (key: string) => {
	const data = await chrome.storage.local.get([key]);
	return data[key];
};

const logQuota = async () => {
	const totalQuata = chrome.storage.local.QUOTA_BYTES;
	const usedQuota = await chrome.storage.local.getBytesInUse();
	const remainingQuota = totalQuata - usedQuota;
	console.log("Total Quota: " + totalQuata);
	console.log("Used Quota: " + usedQuota);
	console.log("Remaining Quota: " + remainingQuota);
	await logApproxMaxBooks();
};

const logApproxMaxBooks = async () => {
	const totalQuata = chrome.storage.local.QUOTA_BYTES;
	const usedQuota = await chrome.storage.local.getBytesInUse();
	const BooksUsedQuata = await chrome.storage.local.getBytesInUse(
		storedBooksKey
	);
	const BooksStored = await getSavedBooks();
	const bytesPerBook = BooksUsedQuata / BooksStored.length;
	const approxMaxBooks = Math.floor(
		(totalQuata - usedQuota) / bytesPerBook + BooksStored.length
	);
	console.log("Bytes Per Book: ", bytesPerBook);
	console.log("Remaining Quota: ", totalQuata - usedQuota);
	console.log("Books Used Quota: ", BooksUsedQuata);
	console.log(
		"Approximate Remaining Books: ",
		approxMaxBooks - BooksStored.length
	);
	console.log("Approximate Max Books: ", approxMaxBooks);
};

const showData = async (key: string) => {
	console.log(await getData(key));
};

const removeKey = async (key: string) => {
	await chrome.storage.local.remove(key);
};

const removeElement = async (key: string, element: any) => {
	const storedDataArray = await getData(key);
	const newStoredDataArray = storedDataArray.filter((item: any) => {
		return item.id !== element.id;
	});
	if (newStoredDataArray.length === storedDataArray.length) {
		console.log("Element not found");
		return;
	}
	await chrome.storage.local.set({ [key]: newStoredDataArray });
	console.log("Removed");
	await logQuota();
};

const clearStorage = async () => {
	await chrome.storage.local.clear();
	console.log("Storage Cleared");
	await logQuota();
};

export {
	clearStorage,
	removeElement,
	removeKey,
	logApproxMaxBooks,
	updateItem,
	updateSearchLink,
	storedSearchLinksKey,
	storedBooksKey,
	saveBook,
	getSavedBooks,
	saveSearchLink,
	getSavedSearchLinks
};
