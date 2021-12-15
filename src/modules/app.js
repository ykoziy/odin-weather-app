import * as api from './apiFunctions.js';

async function test() {
  let z = await api.fetchWeather('Pittsburgh');
  console.log(z);
}

function init() {
  console.log('Hello world');
  test();
}

export { init };
