type OpenLibraryBook = {
	title: string;
	authors: { name: string }[];
	key: string;
	cover: any;
	[key: string]: any;
}
import emptyCover from "@/static/empty-cover.svg";

function isISBNValid(isbn: string) {
	// Add your ISBN validation logic here.
	let sum = 0;
	let isbnLength = isbn.length;
	if (isbnLength === 10) {
		for (let i = 0; i < isbnLength; i++) {
			if (isbn[i] === "X") {
				sum += 10 * (10 - i);
			} else {
				sum += parseInt(isbn[i]) * (10 - i);
			}
		}
		return sum % 11 === 0;
	}
	if (isbnLength === 13) {
		for (let i = 0; i < isbnLength; i++) {
			if (i % 2 === 0) {
				sum += parseInt(isbn[i]);
			} else {
				sum += parseInt(isbn[i]) * 3;
			}
		}
		return sum % 10 === 0;
	}
	return false;
}

function trimText(text: string) {
	return text.replace(/-/g, "").replace(/ /g, "");
}

const findISBNSOnWebsite = async (url: string) => {
	const website = await fetch(url);
	let text = await website.text();
	text = trimText(text);
	let potentialISBNs = text.match(/\b\d{10}\b|\b\d{13}\b/g);
	if (potentialISBNs === null) {
		return;
	}
	let validISBNs = potentialISBNs.filter((isbn) =>
		isISBNValid(trimText(isbn))
	);
	validISBNs = [...new Set(validISBNs)];
	return validISBNs;
};

const getBooks = async (isbns: string[]): Promise<void | OpenLibraryBook[]> => {
	//Build url with all isbns
	const bibkeys = isbns.map((isbn) => `ISBN:${isbn}`).join(",");
	const url = `https://openlibrary.org/api/books?bibkeys=${bibkeys}&format=json&jscmd=data`;

	//Get data from openlibrary
	const res = await fetch(url);
	if (!res.ok) {
		return;
	}
	const data = await res.json();
	let books: OpenLibraryBook[] = Object.values(data);
	books = books.filter((book) => {
		if (book !== undefined) {
			return true;
		}
		console.log("book is undefined");
		return false;
	});
	return books;
};

const searchForBooks = async (url: string) => {
	const isbns = await findISBNSOnWebsite(url);
	if (!isbns) {
		return;
	}
	const books = await getBooks(isbns);
	if (!books) {
		return;
	}
	const standardBooks = books.map((book) =>
		convertOpenLibraryToStandardBook(book)
	);

	//remove duplicates
	let uniqueBooks = standardBooks.reduce((acc: Book[], current: Book) => {
		if (!acc.some((item: Book) => item.id === current.id))
			acc.push(current);
		return acc;
	}, []);

	return uniqueBooks;
};

const getEditions = async (olid: string) => {
	const res = await fetch(
		`https://openlibrary.org/works/${olid}/editions.json`
	);
	if (res.ok) {
		const data = await res.json();
		return data;
	}
};

const convertOpenLibraryToStandardBook = (book: OpenLibraryBook) => {
	let authors: string[];
	if (book.authors?.length > 0) {
		authors = book.authors.map((author) => author.name);
	} else {
		authors = ["Unknown"];
	}

	const noCover = /https:\/\/covers\.openlibrary\.org\/b\/id\/-1-[LMS]\.jpg/;
	let newBook: Book = {
		title: book.title,
		authors: authors,
		id: book.key,
		cover: {
			small:
				!book.cover ||
				!book.cover.small ||
				noCover.test(book.cover.small)
					? emptyCover
					: book.cover.small,
			medium:
				book.cover !== undefined && book.cover.medium !== undefined
					? book.cover.medium
					: emptyCover,
			large:
				book.cover !== undefined && book.cover.large !== undefined
					? book.cover.large
					: emptyCover,
		},
	};
	return newBook;

	// {
	//     "url": "https://openlibrary.org/books/OL37933229M/The_Hobbit",
	//     "key": "/books/OL37933229M",
	//     "title": "The Hobbit",
	//     "subtitle": "The lord of the rings",
	//     "authors": [
	//         {
	//             "url": "https://openlibrary.org/authors/OL26320A/J.R.R._Tolkien",
	//             "name": "J.R.R. Tolkien"
	//         }
	//     ],
	//     "identifiers": {
	//         "isbn_10": [
	//             "9780547928227"
	//         ],
	//         "openlibrary": [
	//             "OL37933229M"
	//         ]
	//     },
	//     "publishers": [
	//         {
	//             "name": "George Allen & Unwin"
	//         }
	//     ],
	//     "publish_places": [
	//         {
	//             "name": "UK"
	//         }
	//     ],
	//     "publish_date": "21 September 1937",
	//     "notes": "Good, Original.",
	//     "cover": {
	//         "small": "https://covers.openlibrary.org/b/id/12750530-S.jpg",
	//         "medium": "https://covers.openlibrary.org/b/id/12750530-M.jpg",
	//         "large": "https://covers.openlibrary.org/b/id/12750530-L.jpg"
	//     }
	// }
};

const searchBookByTitle = async (title: string) => {
	const query = title.replace(/ /g, "+");
	const res = await fetch(
		`https://openlibrary.org/search.json?q=${query}&fields=title,author_name,key,llcn,cover_edition_key&limit=10`
	);
	const data = await res.json();
	const books = await data.docs.map((book: any) => {
		let cover;
		let coverType;
		if (book.cover_edition_key !== undefined) {
			cover = book.cover_edition_key;
			coverType = "olid";
		} else if (book.llcn !== undefined) {
			cover = book.llcn[0];
			coverType = "llcn";
		}
		return {
			id: book.key,
			title: book.title,
			authors: book.author_name,
			cover: {
				small:
					cover !== undefined
						? `https://covers.openlibrary.org/b/${coverType}/${cover}-S.jpg`
						: emptyCover,
				medium:
					cover !== undefined
						? `https://covers.openlibrary.org/b/${coverType}/${cover}-M.jpg`
						: emptyCover,
				large:
					cover !== undefined
						? `https://covers.openlibrary.org/b/${coverType}/${cover}-L.jpg`
						: emptyCover,
			},
		};
	});
	return books;
};


export {searchForBooks}