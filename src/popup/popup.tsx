import React from "react"
import {createRoot} from 'react-dom/client'
import "../styles/tailwind.css"
type Props = {}
const Popup = (props: Props) => {
  return (
	<div className="h-64 w-64 bg-red-500">Popup</div>
  )
}
export default Popup

const container = document.createElement("div");
document.body.appendChild(container);
const root = createRoot(container);
root.render(<Popup />);