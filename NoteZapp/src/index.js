import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Modal from "react-modal";
import { StateProvider } from "StateProvider";
import reducer, { initialState } from "reducer";

Modal.setAppElement("#root");

ReactDOM.render(
  <StateProvider initialState = {initialState} reducer={reducer}>
    <App />
  </StateProvider>,
  document.getElementById("root")
);
