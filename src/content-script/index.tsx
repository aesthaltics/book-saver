import React from 'react'
import { createRoot } from 'react-dom/client'
import "@/styles/tailwind.css"
import ContentScript from './content-script'

const init = () => {
	const appContainer = document.createElement('div')
	if (!appContainer){
		throw new Error("could not find app container")
	}
	document.body.appendChild(appContainer);
	const root = createRoot(appContainer);

	console.log(appContainer)

	root.render(<ContentScript />);

}

init()