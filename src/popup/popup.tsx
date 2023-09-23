import React from "react";
import "@/styles/tailwind.css";

type Props = {};
const Popup = (props: Props) => {
	return (
		<div className={"h-auto w-auto min-w-max bg-gray-600 p-5"}>
			<div className="flex flex-col justify-center gap-4 text-center">
				<button
					className="bg-blue-500 font-bold text-white hover:bg-blue-700"
					onClick={() => {
						window.open("saved-books.html", "_blank");
					}}
				>
					Saved Books
				</button>
			</div>
		</div>
	);
};
export default Popup;
