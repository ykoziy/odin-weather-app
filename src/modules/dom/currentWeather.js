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

class RenderWeather {
  constructor(weatherData, containerClass, isMetric = false) {
    this.weatherData = weatherData;
    this.isMetric = isMetric;
    this.container = document.querySelector(containerClass);
  }

  #renderMainWeather(parentElement, weatherData) {
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

  #renderOtherConditions(parentElement, weatherData) {
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

  render() {
    let mainWeatherDiv = document.createElement('div');
    mainWeatherDiv.className = 'current-weather-left';

    let mainWeatherData = {
      city: this.weatherData.city,
      dt: this.weatherData.dt,
      timezone: this.weatherData.timezone,
      temp: this.weatherData.weather.temp,
      conditions: this.weatherData.weather.conditions,
    };
    this.#renderMainWeather(mainWeatherDiv, mainWeatherData);

    let otherConditionsDiv = document.createElement('div');
    otherConditionsDiv.className = 'current-weather-right';

    let otherWeatherData = {
      humidity: this.weatherData.weather.humidity,
      tempFeelsLike: this.weatherData.weather.tempFeelsLike,
      pressure: this.weatherData.weather.pressure,
      windDir: this.weatherData.weather.windDir,
      windSpeed: this.weatherData.weather.windSpeed,
      visibility: this.weatherData.weather.visibility,
    };
    this.#renderOtherConditions(otherConditionsDiv, otherWeatherData);

    this.container.appendChild(mainWeatherDiv);
    this.container.appendChild(otherConditionsDiv);
  }
}

export { RenderWeather };
