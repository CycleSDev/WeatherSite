require("file-loader?name=[name].[ext]!./index.html");
import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./Redux/store"
import { Header } from "./components/Header/header";
import { Main } from "./components/Main/Main";
import "./App.scss";

const root = createRoot(document.getElementById("app"));

root.render(
  <Provider store={store}>
    <Header />
    <Main />
  </Provider>
);
