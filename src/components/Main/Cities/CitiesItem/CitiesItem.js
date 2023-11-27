import React from "react";
import weatherSvg from "../../../weatherImg/ImportExportSVG";
import "./CitiesItem.scss";

export const CitiesItem = (props) => {
  // Расчёт часа от GTM 0 в городах с учётом timezone, для иконки день/ночь
  const hour = new Date().getUTCHours() + (props.data.sys.timezone / 60 / 60)

  // Проверка кода погоды с сервера
  let weatherImg;

  switch (props.data.weather[0].id) {
    case 200:
    case 201:
    case 202:
    case 210:
    case 211:
    case 212:
    case 221:
    case 230:
    case 231:
    case 232:
      weatherImg = weatherSvg.Storm;
      break;
    case 300:
    case 301:
    case 302:
    case 310:
    case 311:
    case 500:
    case 501:
    case 520:
      weatherImg = weatherSvg.Rain;
      break;
    case 312:
    case 313:
    case 314:
    case 321:
    case 502:
    case 503:
    case 504:
    case 521:
    case 522:
    case 531:
      weatherImg = weatherSvg.Shower;
      break;
    case 511:
    case 600:
    case 601:
      weatherImg = weatherSvg.Snow;
      break;
    case 602:
    case 611:
    case 612:
    case 613:
    case 615:
    case 616:
    case 620:
    case 621:
    case 622:
      weatherImg = weatherSvg.Blizzard;
      break;
    case 701:
    case 711:
    case 721:
    case 731:
    case 741:
    case 751:
    case 761:
    case 762:
    case 771:
    case 781:
      weatherImg = weatherSvg.MainlyCloudy;
      break;
    case 800:
      if (hour <= 6 || hour >= 22) {
        weatherImg = weatherSvg.Night;
      } else {
        weatherImg = weatherSvg.Sun;
      }
      break;
    case 801:
    case 802:
    case 803:
    case 804:
      if (hour <= 6 || hour >= 22) {
        weatherImg = weatherSvg.CloudyNight;
      } else {
        weatherImg = weatherSvg.Cloudy;
      }
      break;

    default:
      console.error("Ошибка проверки иконок");
      break;
  }

  // Перевод названия городов на русский
  let cityName;

  switch (props.data.name) {
    case "Saint Petersburg":
      cityName = "Санкт-Петербург";
      break;
    case "Novyy Sochi":
      cityName = "Сочи";
      break;
    case "Rostov-on-Don":
      cityName = "Ростов-на-Дону";
      break;
    case "Volgograd":
      cityName = "Волгоград";
      break;
    case "Nizhny Novgorod":
      cityName = "Нижний Новгород";
      break;
    case "Novosibirsk":
      cityName = "Новосибирск";
      break;
    default:
      cityName = "Где-то на земной шаре";
      break;
  }
  
  return (
    <div className="Cities__main_item">
      <img src={weatherImg} title={props.data.weather[0].description} alt={props.data.weather[0].description} />
      <p>{Math.round(props.data.main.temp)}°C</p>
      <p>{cityName}</p>
    </div>
  );
};
