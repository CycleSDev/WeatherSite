import React from "react";
import "./Main.scss";
import { NowItem } from "./NowItem/NowItem";
import { Cities } from "./Cities/Cities";
import { Daylight } from "./Daylight/Daylight";

export const Main = () => {

    return (
        <div className="Main">
         <NowItem />
         <Cities />
         <Daylight />
        </div>
    )
}