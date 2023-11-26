require("file-loader?name=[name].[ext]!./index.html");
import React from "react";
import { createRoot } from "react-dom/client";
import { Header } from "./components/Header/header";
import { Main } from "./components/Main/Main";
import "./App.scss";

const root = createRoot(document.getElementById("app"));

root.render(
  <>
   <Header />
   <Main />
  </>
);
