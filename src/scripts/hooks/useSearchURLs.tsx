import { useEffect, useState } from "react";
import {
	getSavedSearchLinks,
	storedSearchLinksKey,
} from "@/scripts/handleStorage";

const useSearchURLs = () => {
	const [searchURLs, setSearchURLs] = useState<SearchLink[]>([]);

	useEffect(() => {
		const fetchSearchURLs = async () => {
			const searchURLs = await getSavedSearchLinks();
			setSearchURLs(searchURLs);
		};

		const handleStorageChange = async (
			changes: { [key: string]: chrome.storage.StorageChange },
			nameSpace: string
		) => {
			if (changes[storedSearchLinksKey]) {
				fetchSearchURLs();
			}
		};

		fetchSearchURLs();
		chrome.storage.onChanged.addListener(handleStorageChange);
		return () => {
			chrome.storage.onChanged.removeListener(handleStorageChange);
		};
	}, []);

	return searchURLs;
};

export default useSearchURLs