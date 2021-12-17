const API_KEY = 'bee7597dcba3a8d3b0345cbdbb7cc8ca';

function currentWeatherUrl(cityName) {
  return `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`;
}

function forecastWeatherUrl(lat, lon) {
  return `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,alerts&appid=${API_KEY}`;
}

async function fetchWeather(url) {
  const response = await fetch(url, { mode: 'cors' });
  const data = await response.json();
  return data;
}

export { currentWeatherUrl, forecastWeatherUrl, fetchWeather };
