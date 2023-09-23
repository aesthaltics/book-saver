import React from "react";
import { createRoot } from "react-dom/client";
import emptyCover from "@/assets/img/empty-cover.svg"
import "@/styles/tailwind.css";
type Props = {};
const Popup = (props: Props) => {
	return (
		<div className="h-64 w-64 bg-red-500">
			Popup
			<img src={emptyCover} alt="image of empyty cover" />
		</div>
	);
};
export default Popup;

const container = document.createElement("div");
document.body.appendChild(container);
const root = createRoot(container);
root.render(<Popup />);
