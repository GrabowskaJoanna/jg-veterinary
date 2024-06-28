import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "/resources/styles/main.scss";
import App from "./App";
import { Provider } from "react-redux";
import store from "./pages/store/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);
