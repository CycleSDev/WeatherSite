import React from "react";
import SearchLogo from "./Search.svg"
import Calendar from "./Calendar.svg"
import "./header.scss";

export const Header = () => {
  return (
    <header>
     <div><input type="text" size={10} placeholder="Поиск"></input> <img src={SearchLogo}></img></div>
     <div><img src={Calendar}></img><p>Дата</p></div>
    </header>
  );
};
