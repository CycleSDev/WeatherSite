import React from "react";
import { CitiesItem } from "./CitiesItem/CitiesItem";
import { useSelector } from "react-redux";
import "./Cities.scss";

export const Cities = () => {
  
  let citiesData = useSelector(state => state.citiesReducer)

  return (
    <div className="Cities Main_item b__item">
      <h2 className="Cities__header"> Погода в других городах </h2>
      <div className="Cities__main">
       { citiesData.list.map((data) => <CitiesItem key={data.name} data={data} />)}
      </div>
    </div>
  );
};