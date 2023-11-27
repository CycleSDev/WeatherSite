await fetch(
  `https://api.openweathermap.org/data/2.5/weather?q=Moscow&lang=ru&units=metric&appid=${process.env.API_key}`
)
  .then((res) => res.json())
  .then((data) => (nowDatafetch = data));

export let nowDatafetch;
