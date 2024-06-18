import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import { store } from "@redux/store";

import { App } from "@components/App";

import "@styles/general.scss";

const root = document.getElementById("root");

if (root === null) {
  throw new Error("root not found");
}

createRoot(root).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
