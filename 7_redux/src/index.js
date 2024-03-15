import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.js"
import { store } from "./store.js"
import './index.css';

const root = createRoot(document.getElementById('root'));
const render = () => {
  root.render(<App/>);
}

render();
