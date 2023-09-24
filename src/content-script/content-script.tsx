import React from "react";
import styles from "@/styles/injectedTailwind.css";


type Props = {
	del: () => void;
	books: Book[];
};
const ContentScript = ({ del, books }: Props) => {
	return (
		<div onClick={del}>
			<style type="text/css">{styles.toString()}</style>
			<div className="isolate fixed z-[999] flex h-screen w-screen items-center justify-center bg-gray-300 bg-opacity-30 inset-0">
				<div
					className="h-4/5 w-96 overflow-y-scroll rounded-xl bg-gray-400"
					onClick={(e) => e.stopPropagation()}
				>
					<FoundBookList books={books} handleSave={(book) => {return}}/>
				</div>
			</div>
		</div>
	);
};
export default ContentScript;

const BookRow = ({
	book,
	handleSave,
}: {
	book: Book;
	handleSave: (book: Book) => void;
}) => {
	return (
		<li className="flex items-center justify-between gap-2 rounded-xl border bg-gray-200 p-2 shadow ">
			<div className="flex w-24 justify-start">
				<img
					className="h-20 rounded-sm"
					src={book.cover.small}
					alt={book.title}
				/>
			</div>

			<div className="w-full text-left text-gray-600">
				<div>
					<p className="text-lg font-bold">{book.title}</p>
					<p className="text-md">{book.authors[0]}</p>
				</div>
			</div>
			<div>
				<button
					className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
					onClick={() => handleSave(book)}
				>
					Save
				</button>
			</div>
		</li>
	);
};

const FoundBookList = ({
	books,
	handleSave,
}: {
	books: Book[];
	handleSave: (book: Book) => void;
}) => {
	const bookElements = books.map((book) => {
		return <BookRow book={book} key={book.id} handleSave={handleSave} />;
	});
	return (
		<div onClick={(e) => e.stopPropagation()}>
			<ul className="flex flex-col gap-2">{bookElements}</ul>
		</div>
	);
};
