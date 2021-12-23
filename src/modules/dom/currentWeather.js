import { UnitConversion } from '../util.js';

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

  set isMetric(metric) {
    this._isMetric = metric;
  }

  get isMetric() {
    return this._isMetric;
  }

  #renderMainWeather(parentElement, weatherData) {
    const converter = new UnitConversion(this.isMetric);
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
    const temperature = converter.convertTemperature(weatherData.temp);
    tempPar.innerHTML = `${temperature[0]} ${temperature[1]}`;
    parentElement.appendChild(tempPar);

    let conditionsPar = document.createElement('p');
    conditionsPar.innerHTML = weatherData.conditions;
    parentElement.appendChild(conditionsPar);
  }

  #renderOtherConditions(parentElement, weatherData) {
    const converter = new UnitConversion(this.isMetric);
    let feelsLikePar = document.createElement('p');
    const tempFeelsLike = converter.convertTemperature(
      weatherData.tempFeelsLike,
    );
    feelsLikePar.innerHTML = `Feels like: ${tempFeelsLike[0]} ${tempFeelsLike[1]}`;
    parentElement.appendChild(feelsLikePar);

    let humidityPar = document.createElement('p');
    humidityPar.innerHTML = `Humidity: ${weatherData.humidity}%`;
    parentElement.appendChild(humidityPar);

    let pressurePar = document.createElement('p');
    const pressure = converter.convertPressure(weatherData.pressure);
    pressurePar.innerHTML = `Pressure: ${pressure[0]} ${pressure[1]}`;
    parentElement.appendChild(pressurePar);

    let visibilityPar = document.createElement('p');
    const visibility = converter.convertDistance(weatherData.visibility);
    visibilityPar.innerHTML = `Visibility: ${visibility[0]} ${visibility[1]}`;
    parentElement.appendChild(visibilityPar);

    let windPar = document.createElement('p');
    const speed = converter.convertSpeed(weatherData.windSpeed);
    windPar.innerHTML = `Wind ${weatherData.windDir} at ${speed[0]} ${speed[1]}`;
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
