import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ToastContainer } from "react-toastify";
import App from "./App";
import Redux from "./Redux";
import 'react-toastify/dist/ReactToastify.css';

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <Redux>
    <App />
    <ToastContainer />
  </Redux>
);
