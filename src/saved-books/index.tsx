import React from "react";
import { createRoot } from "react-dom/client";
import BookShelf from "./book-shelf";

const container = document.createElement("div");
document.body.appendChild(container);
const root = createRoot(container);
root.render(<BookShelf />);
