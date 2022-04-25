import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "./store/store";

import "antd/dist/antd.css";
import "leaflet/dist/leaflet.css";
import "./index.css";

import App from "./App";

const rootNode = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootNode
);
