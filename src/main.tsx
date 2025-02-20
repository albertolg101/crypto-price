import React from "react"
import ReactDOM from "react-dom/client"

import App from "./App.tsx"

import "./global.css"

const element = document.getElementById("root")
if (!element) throw new Error("Cannot find #root element.")

ReactDOM.createRoot(element).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
