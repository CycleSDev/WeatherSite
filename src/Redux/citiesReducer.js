await fetch(
    `https://api.openweathermap.org/data/2.5/group?id=498817,823678,501175,472757,520555,1496747&lang=ru&units=metric&appid=${process.env.API_key}`
  )
    .then((res) => res.json())
    .then((data) => (defultState = data));

let defultState

export const citiesReducer = (state = defultState) => {
    return state;
}