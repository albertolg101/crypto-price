import React from "react"
import ReactDOM from "react-dom/client"

import App from "./App.tsx"

const element = document.getElementById("root")
if (!element) throw new Error("Cannot find #root element.")

ReactDOM.createRoot(element).render(
  <React.StrictMode>
    <App onClick={() => alert("Clicked!")} />
  </React.StrictMode>
)
