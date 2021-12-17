function processWeatherData(json) {
  const data = { weather: {} };

  data.city = json.name;
  data.dt = json.dt;
  data.timezone = json.timezone;
  data.weather.conditions = json.weather[0].description;
  data.weather.temp = json.main.temp;
  data.weather.tempMin = json.main.temp_min;
  data.weather.tempMax = json.main.temp_max;
  data.weather.tempFeelsLike = json.main.feels_like;
  data.weather.humidity = json.main.humidity;
  data.weather.pressure = json.main.pressure;
  data.weather.visibility = json.visibility;
  data.weather.windSpeed = json.wind.speed;
  data.weather.windDir = json.wind.deg;

  return data;
}

export { processWeatherData };
