import React from "react";
import { CitiesItem } from "./CitiesItem/CitiesItem";
import { citiesDatafetch } from "../../FetchWeather/CitiesFetch";
import "./Cities.scss";

export const Cities = () => {

  return (
    <div className="Cities Main_item b__item">
      <h2 className="Cities__header"> Погода в других городах </h2>
      <div className="Cities__main">
       { citiesDatafetch.list.map((citiesData) => <CitiesItem key={citiesData.name} data={citiesData} />)}
      </div>
    </div>
  );
};