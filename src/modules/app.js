import * as api from './apiFunctions.js';
import * as json from './jsonFunctions.js';
import { RenderWeather } from './dom/currentWeather.js';
import { RenderForecast } from './dom/forecastWeather.js';
import {
  toggleActiveButton,
  showError,
  hideError,
  showLoading,
  hideLoading,
} from './dom/util.js';
import { Carousel } from './dom/hourlyCarousel';

let currentWeather = new RenderWeather(null, '.weather-container', true);

let forecastWeather = new RenderForecast(
  null,
  '.weather-forecast-cards',
  false,
  true,
);

function clearCurrentWeather() {
  const container = document.querySelector('.weather-container');
  container.innerHTML = '';
}

function clearForecastWeather() {
  const container = document.querySelector('.weather-forecast-cards');
  container.innerHTML = '';
}

function clearWeather() {
  clearCurrentWeather();
  clearForecastWeather();
}

function renderWeather() {
  currentWeather.render();
  forecastWeather.render();
}

function setUnits(event, isMetric) {
  const buttons = document.querySelectorAll('.unit-input button');
  toggleActiveButton(buttons, event.target);
  if (isMetric) {
    currentWeather.isMetric = true;
    forecastWeather.isMetric = true;
  } else {
    currentWeather.isMetric = false;
    forecastWeather.isMetric = false;
  }
  clearWeather();
  renderWeather();
}

function switchForecast(event, isHourly) {
  const hourlyControls = document.querySelector('.page-hours');
  const buttons = document.querySelectorAll('.forecast-switch button');
  toggleActiveButton(buttons, event.target);
  if (isHourly) {
    forecastWeather.isHourly = true;
    hourlyControls.style.display = 'block';
    clearForecastWeather();
    forecastWeather.render();
    new Carousel('.page-hours', '.weather-forecast-cards');
  } else {
    forecastWeather.isHourly = false;
    hourlyControls.style.display = 'none';
    clearForecastWeather();
    forecastWeather.render();
  }
}

async function getWeatherForLocation(locationName) {
  let weatherJson = await api.fetchWeather(api.currentWeatherUrl(locationName));
  let weatherData = json.processWeatherData(weatherJson);
  let forecastJson = await api.fetchWeather(
    api.forecastWeatherUrl(weatherData.lat, weatherData.lon),
  );
  currentWeather = new RenderWeather(weatherData, '.weather-container', true);

  forecastWeather = new RenderForecast(
    json.processForecastData(forecastJson),
    '.weather-forecast-cards',
    false,
    true,
  );
}

async function findWeather() {
  hideError('.weather-error-container');
  showLoading();
  let locationValue = document.querySelector('.search-box-input').value;
  if (locationValue) {
    try {
      await getWeatherForLocation(locationValue);
    } catch (e) {
      showError(
        '.weather-error-container',
        'Something went bad. Make sure you typed in the right location.',
      );
      hideLoading();
      return;
    }
    clearWeather();
    renderWeather();
  }
  hideLoading();
}

async function renderInitialWeather() {
  showLoading();
  try {
    await getWeatherForLocation('London');
  } catch (e) {
    showError(
      '.weather-error-container',
      'Something went bad. Unable to get the weather information.',
    );
    return;
  }
  renderWeather();
  hideLoading();
}

function init() {
  renderInitialWeather();
  document.getElementById('search-btn').addEventListener('click', findWeather);
  document
    .getElementById('metric-btn')
    .addEventListener('click', (event) => setUnits(event, true));
  document
    .getElementById('imperial-btn')
    .addEventListener('click', (event) => setUnits(event, false));

  document
    .getElementById('daily-btn')
    .addEventListener('click', (event) => switchForecast(event, false));
  document
    .getElementById('hourly-btn')
    .addEventListener('click', (event) => switchForecast(event, true));
}

export { init };
