function kelvinToCelcius(kelvinValue) {
  return Math.round(kelvinValue - 273.15);
}

function kelvinToFahrenheit(kelvinValue) {
  return Math.round(kelvinValue * 1.8 - 459.67);
}

export { kelvinToCelcius, kelvinToFahrenheit };
