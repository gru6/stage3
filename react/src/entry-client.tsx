import "./index.css";
import React from "react";
import { hydrateRoot } from "react-dom/client";
import { App } from "./App";
import { BrowserRouter } from "react-router-dom";
import { setupStore } from "./store";
import { Provider } from "react-redux";
/* 
import { JSDOM } from "jsdom";
const { document } = new JSDOM("").window; */

hydrateRoot(
  document.getElementById("root") as HTMLElement,
  <React.StrictMode>
    <Provider store={setupStore()}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
