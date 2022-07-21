import React from "react";
import ReactDOM from "react-dom/client";

import Root from "./Root";

if (process.env.NODE_ENV === "production") {
  console.log = () => {};
  console.error = () => {};
  console.debug = () => {};
}

const container = document.getElementById("root");

if (!container) throw new Error("Failed to find the root element");

const root = ReactDOM.createRoot(container);

root.render(<Root />);
