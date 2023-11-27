import React from "react";
import weatherSvg from "../../weatherImg/ImportExportSVG";
import "./Now.scss";

export const Now = () => {

    return (
        <div className="NowItem Main_item a__item">
        <div className="NowItem__Nowinfo"></div>
        <span></span>
        <div className="NowItem__HoursInfo"></div>
        </div>
    )
}