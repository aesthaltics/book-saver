import React from 'react'
import { createRoot } from 'react-dom/client'
import ContentScript from './content-script'

import dummyBooks from '@/assets/dummy-data/dummy-books'

const init = (books: Book[]) => {
	const appContainer = document.createElement("div");
	const shadow = appContainer.attachShadow({ mode: "open" });

	const defaultOverflow = document.body.style.overflow;
	const defaultPosition = document.body.style.position;
	//Prevents scrolling when the overlay is open
	document.body.style.overflow = "hidden";
	//This prevents scrolling on phone screens
	document.body.style.position = "fixed;";
	if (!appContainer) {
		throw new Error("could not find app container");
	}
	document.body.appendChild(appContainer);
	const root = createRoot(shadow);

	console.log(appContainer);

	root.render(
		<ContentScript
			books={books}
			del={() => {
				document.body.removeChild(appContainer);
				document.body.style.overflow = defaultOverflow;
				document.body.style.position = defaultPosition;
			}}
		/>
	);
};
init(dummyBooks)
