const API_KEY = 'bee7597dcba3a8d3b0345cbdbb7cc8ca';

async function fetchWeather(cityName) {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`,
    { mode: 'cors' },
  );
  const data = await response.json();
  return data;
}

export { fetchWeather };
