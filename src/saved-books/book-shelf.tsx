import React, { useState, useRef, forwardRef } from "react";


import "@/styles/tailwind.css";
import useBooks from "@/scripts/hooks/useBooks";
import useSearchURLs from "@/scripts/hooks/useSearchURLs";

const BookShelf = () => {
	const books = useBooks()
	const [cardHeight, setCardHeight] = React.useState<number>(250);

	return (
		<div className="relative h-screen w-screen overflow-y-scroll bg-muted">
			<div className="flex">
				<div className="mx-auto mt-4 flex w-1/2 items-center space-x-3"></div>
			</div>
			<div className="relative m-10 flex flex-wrap justify-start justify-items-center gap-4">
				{books &&
					books.map((book) => (
						<div key={`${book.id}`}>
							<BookCard
								cardHeight={cardHeight}
								book={book}
								key={book.id}
								handleDelete={() => {
									return;
								}}
							/>
						</div>
					))}
			</div>
		</div>
	);
};

export default BookShelf;

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
	book: Book;
	cardHeight: number;
	handleDelete: () => void;
}

const BookCard = forwardRef<HTMLDivElement, CardProps>(
	({ book, cardHeight, handleDelete, ...props }, ref) => {
		const [isHovered, setIsHovered] = useState(false);
		const [ratio, setRatio] = useState(1);
		const handleRatio = (ratio: number) => {
			setRatio(ratio);
		};

		const imgHeight = 2 / 3;
		return (
			<div
				style={{
					height: `${cardHeight}px`,
					width: `${cardHeight * imgHeight * ratio}px`,
				}}
				className="z-0"
			>
				<div
					className={`flex flex-col items-center justify-between rounded-lg bg-primary p-0 opacity-100 hover:absolute hover:z-50 hover:min-h-max hover:opacity-100 bg-gray-100 hover:scale-125 duration-100`}
					style={{
						width: `${cardHeight * imgHeight * ratio}px`,
						zIndex: isHovered ? 10 : 0,
						minHeight: `${cardHeight}px`,
						height: isHovered ? "auto" : `${cardHeight}px`,
					}}
					onMouseEnter={() => setIsHovered(true)}
					onMouseLeave={() => {
						setIsHovered(false);
					}}
				>
					<DeleteButton
						isActive={isHovered}
						handleDelete={handleDelete}
					/>

					<CardImage
						handleRatio={handleRatio}
						height={imgHeight}
						imgSrc={book.cover.large}
						alt={book.title}
						id={book.id}
					/>

					<CardInfo
						title={book.title}
						authors={book.authors}
						isActive={isHovered}
					/>

					<div className="w-full px-5"></div>
					<SearchLinks title={book.title} />
				</div>
			</div>
		);
	}
);

export const DeleteButton = ({
	isActive,
	handleDelete,
}: {
	isActive: boolean;
	handleDelete: () => void;
}) => {
	return (
		<button
			className={`m-2 h-6 w-6 rounded-full p-0 ${
				isActive ? "flex" : "hidden"
			} absolute items-center justify-center self-end`}
			onClick={handleDelete}
		></button>
	);
};

export const CardImage = ({
	handleRatio,
	id,
	height,
	imgSrc,
	alt,
}: {
	handleRatio: (ratio: number) => void;
	height: number;
	imgSrc: string | undefined;
	alt: string;
	id?: string;
}) => {
	return (
		<img
			className="m-0 w-full rounded-t-lg p-0"
			// style={{ width }}
			src={imgSrc}
			alt={alt}
			onLoad={(e) => {
				handleRatio(
					e.currentTarget.naturalWidth / e.currentTarget.naturalHeight
				);
			}}
		/>
	);
};

export const CardInfo = ({
	title,
	authors,
	isActive,
}: {
	title: string;
	authors: string[];
	isActive: boolean;
}) => {
	return (
		<div className={`mt-2 flex w-full flex-col px-2 text-left`}>
			<h1
				className={`text-md overflow-auto  ${
					isActive ? "break-words" : "truncate"
				} font-bold tracking-tight`}
			>
				{title}
			</h1>
			<h2 className={`text-md ${isActive ? "break-words" : "truncate"}`}>
				{authors?.length > 0 ? authors[0] : "Unknown"}
			</h2>
		</div>
	);
};

type SearchLinksProps = {
	title: string;
};

function SearchLinks({ title }: SearchLinksProps) {
	let searchURLs = useSearchURLs()
	if (!searchURLs || searchURLs?.length === 0) {
		return;
	}
	return (
		<div className="mb-2 flex justify-around w-full flex-none">
			{searchURLs.map((link) => {
				if (!link.isActive) {
					return;
				}
				return (
					<button
						className="h-6 w-6 rounded-full border-gray-400 p-0"
						onClick={() => {
							window.open(
								link.url + title.replace(" ", "+"),
								"_blank"
							);
						}}
						key={link.id}
					>
						<img
							src={link.icon}
							alt={link.name}
							className="m-0 w-6 rounded-full p-0"
						/>
					</button>
				);
			})}
		</div>
	);
}
