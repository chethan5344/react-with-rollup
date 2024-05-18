import React from 'react';
import { createRoot } from "react-dom/client";
import App from "./App.jsx"

const rootNode = document.getElementById("root")
const root = createRoot(rootNode, {
    onUncaughtError: (error, errorInfo) => {
        console.error(error, errorInfo)
    },
    onCaughtError: (error, errorInfo) => {
        console.error(error, errorInfo)
    }
})

root.render(<App />)