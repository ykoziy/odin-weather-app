function getDay(dayNum) {
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  return days[dayNum];
}

function renderMainWeather(parentElement, weatherData) {
  let cityNameHeading = document.createElement('h1');
  cityNameHeading.innerHTML = weatherData.city;
  parentElement.appendChild(cityNameHeading);

  let asOfHeading = document.createElement('h2');
  //unix time in api is seconds...
  //JS date is always local time.....
  let date = new Date(weatherData.dt * 1000);
  let day = getDay(date.getDay());
  asOfHeading.innerHTML = `${day} and 11:11 PM`;

  parentElement.appendChild(asOfHeading);

  let tempPar = document.createElement('p');
  tempPar.innerHTML = `${weatherData.temp} K`;
  parentElement.appendChild(tempPar);

  let conditionsPar = document.createElement('p');
  conditionsPar.innerHTML = weatherData.conditions;
  parentElement.appendChild(conditionsPar);
}

function renderOtherConditions(parentElement, weatherData) {
  let feelsLikePar = document.createElement('p');
  feelsLikePar.innerHTML = `Feels like: ${weatherData.tempFeelsLike} K`;
  parentElement.appendChild(feelsLikePar);

  let humidityPar = document.createElement('p');
  humidityPar.innerHTML = `Humidity: ${weatherData.humidity}%`;
  parentElement.appendChild(humidityPar);

  let pressurePar = document.createElement('p');
  pressurePar.innerHTML = `Pressure: ${weatherData.pressure} hPa`;
  parentElement.appendChild(pressurePar);

  let visibilityPar = document.createElement('p');
  visibilityPar.innerHTML = `Visibility: ${weatherData.visibility} m`;
  parentElement.appendChild(visibilityPar);

  let windPar = document.createElement('p');
  windPar.innerHTML = `Wind ${weatherData.windDir} at ${weatherData.windSpeed} m/s`;
  parentElement.appendChild(windPar);
}

function renderCurrentWeather(weatherData) {
  const container = document.querySelector('.weather-container');

  let mainWeatherDiv = document.createElement('div');
  mainWeatherDiv.className = 'current-weather-left';

  let mainWeatherData = {
    city: weatherData.city,
    dt: weatherData.dt,
    timezone: weatherData.timezone,
    temp: weatherData.weather.temp,
    conditions: weatherData.weather.conditions,
  };
  renderMainWeather(mainWeatherDiv, mainWeatherData);

  let otherConditionsDiv = document.createElement('div');
  otherConditionsDiv.className = 'current-weather-right';

  let otherWeatherData = {
    humidity: weatherData.weather.humidity,
    tempFeelsLike: weatherData.weather.tempFeelsLike,
    pressure: weatherData.weather.pressure,
    windDir: weatherData.weather.windDir,
    windSpeed: weatherData.weather.windSpeed,
    visibility: weatherData.weather.visibility,
  };
  renderOtherConditions(otherConditionsDiv, otherWeatherData);

  container.appendChild(mainWeatherDiv);
  container.appendChild(otherConditionsDiv);
  console.log(weatherData.city);
}

export { renderCurrentWeather };
