import React from "react"
import {createRoot} from 'react-dom/client'
type Props = {}
const Popup = (props: Props) => {
  return (
	<div>Popup</div>
  )
}
export default Popup

const container = document.createElement("div");
document.body.appendChild(container);
const root = createRoot(container);
root.render(<Popup />);