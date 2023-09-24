import React, {useEffect} from 'react'
import { getSavedBooks, storedBooksKey } from '../handleStorage';

const useBooks = () => {
	const [books, setBooks] = React.useState<Book[]>([]);

	useEffect(() => {
		const fetchBooks = async () => {
			let books = await getSavedBooks();
			setBooks(books);
		};

		const handleStorageChange = async (
			changes: { [key: string]: chrome.storage.StorageChange },
		) => {
			if (changes[storedBooksKey]) {
				fetchBooks();
			}
		};

		fetchBooks();
		chrome.storage.onChanged.addListener(handleStorageChange);
		return () => {
			chrome.storage.onChanged.removeListener(handleStorageChange);
		};
	}, []);

	return books;
};

export default useBooks