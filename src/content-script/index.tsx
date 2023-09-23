import React from 'react'
import { createRoot } from 'react-dom/client'
import ContentScript from './content-script'

const init = () => {
	const appContainer = document.createElement('div')
	const shadow = appContainer.attachShadow({mode: "open"})
	if (!appContainer){
		throw new Error("could not find app container")
	}
	document.body.appendChild(appContainer)
	const root = createRoot(shadow);

	console.log(appContainer)

	root.render(<ContentScript/>);

}

init()