import React from "react";
import { Now } from "./Now/Now";
import { Cities } from "./Cities/Cities";
import { Daylight } from "./Daylight/Daylight";
import "./Main.scss";

export const Main = () => {
  return (
    <div className="Main">
      <Now />
      <Cities />
      <Daylight />
    </div>
  );
};
