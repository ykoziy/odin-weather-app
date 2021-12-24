function processWeatherData(json) {
  const data = { weather: {} };

  data.city = json.name;
  data.dt = json.dt;
  data.timezone = json.timezone;
  data.lon = json.coord.lon;
  data.lat = json.coord.lat;
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

function processForecastData(json) {
  const data = { dailyForecast: [], hourlyForecast: [] };
  json.daily.slice(1).forEach((day) => {
    let item = {};
    item.dt = day.dt;
    item.tempMin = day.temp.min;
    item.tempMax = day.temp.max;
    item.conditions = day.weather[0].description;
    data.dailyForecast.push(item);
  });

  json.hourly.forEach((hour) => {
    let item = {};
    item.dt = hour.dt;
    item.temp = hour.temp;
    item.conditions = hour.weather[0].description;
    data.hourlyForecast.push(item);
  });

  return data;
}

export { processWeatherData, processForecastData };
