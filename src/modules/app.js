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

const dataJson = {
  coord: {
    lon: -79.9959,
    lat: 40.4406,
  },
  weather: [
    {
      id: 804,
      main: 'Clouds',
      description: 'overcast clouds',
      icon: '04d',
    },
  ],
  base: 'stations',
  main: {
    temp: 280.54,
    feels_like: 280.54,
    temp_min: 278.92,
    temp_max: 281.97,
    pressure: 1010,
    humidity: 67,
  },
  visibility: 10000,
  wind: {
    speed: 0.89,
    deg: 187,
    gust: 2.24,
  },
  clouds: {
    all: 90,
  },
  dt: 1640717321,
  sys: {
    type: 2,
    id: 2008550,
    country: 'US',
    sunrise: 1640695346,
    sunset: 1640728840,
  },
  timezone: -18000,
  id: 5206379,
  name: 'Pittsburgh',
  cod: 200,
};

const jsonForecastData = {
  lat: 40.4406,
  lon: -79.9959,
  timezone: 'America/New_York',
  timezone_offset: -18000,
  hourly: [
    {
      dt: 1640714400,
      temp: 280.53,
      feels_like: 279.47,
      pressure: 1010,
      humidity: 63,
      dew_point: 273.96,
      uvi: 1.04,
      clouds: 99,
      visibility: 10000,
      wind_speed: 1.81,
      wind_deg: 116,
      wind_gust: 3.37,
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d',
        },
      ],
      pop: 0,
    },
    {
      dt: 1640718000,
      temp: 280.48,
      feels_like: 280.48,
      pressure: 1010,
      humidity: 67,
      dew_point: 274.76,
      uvi: 0.18,
      clouds: 100,
      visibility: 10000,
      wind_speed: 0.52,
      wind_deg: 21,
      wind_gust: 1.14,
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10d',
        },
      ],
      pop: 0.97,
      rain: {
        '1h': 0.15,
      },
    },
    {
      dt: 1640721600,
      temp: 280.05,
      feels_like: 278.2,
      pressure: 1010,
      humidity: 69,
      dew_point: 274.76,
      uvi: 0.1,
      clouds: 100,
      visibility: 10000,
      wind_speed: 2.63,
      wind_deg: 38,
      wind_gust: 4.41,
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d',
        },
      ],
      pop: 0.8,
    },
    {
      dt: 1640725200,
      temp: 279.45,
      feels_like: 276.88,
      pressure: 1010,
      humidity: 71,
      dew_point: 274.59,
      uvi: 0.03,
      clouds: 100,
      visibility: 10000,
      wind_speed: 3.53,
      wind_deg: 70,
      wind_gust: 6.35,
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d',
        },
      ],
      pop: 0.8,
    },
    {
      dt: 1640728800,
      temp: 278.85,
      feels_like: 276.07,
      pressure: 1009,
      humidity: 73,
      dew_point: 274.39,
      uvi: 0,
      clouds: 100,
      visibility: 10000,
      wind_speed: 3.66,
      wind_deg: 81,
      wind_gust: 9.62,
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10d',
        },
      ],
      pop: 1,
      rain: {
        '1h': 0.14,
      },
    },
    {
      dt: 1640732400,
      temp: 278.33,
      feels_like: 275.62,
      pressure: 1008,
      humidity: 78,
      dew_point: 274.81,
      uvi: 0,
      clouds: 100,
      visibility: 10000,
      wind_speed: 3.36,
      wind_deg: 48,
      wind_gust: 8.1,
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10n',
        },
      ],
      pop: 1,
      rain: {
        '1h': 0.2,
      },
    },
    {
      dt: 1640736000,
      temp: 277.82,
      feels_like: 275.05,
      pressure: 1007,
      humidity: 83,
      dew_point: 274.74,
      uvi: 0,
      clouds: 100,
      visibility: 10000,
      wind_speed: 3.29,
      wind_deg: 59,
      wind_gust: 7.24,
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10n',
        },
      ],
      pop: 1,
      rain: {
        '1h': 0.37,
      },
    },
    {
      dt: 1640739600,
      temp: 278,
      feels_like: 275.83,
      pressure: 1006,
      humidity: 84,
      dew_point: 275.23,
      uvi: 0,
      clouds: 100,
      visibility: 10000,
      wind_speed: 2.55,
      wind_deg: 67,
      wind_gust: 4.97,
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10n',
        },
      ],
      pop: 0.86,
      rain: {
        '1h': 0.36,
      },
    },
    {
      dt: 1640743200,
      temp: 277.99,
      feels_like: 275.65,
      pressure: 1006,
      humidity: 88,
      dew_point: 275.88,
      uvi: 0,
      clouds: 100,
      visibility: 10000,
      wind_speed: 2.76,
      wind_deg: 13,
      wind_gust: 4.17,
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10n',
        },
      ],
      pop: 0.98,
      rain: {
        '1h': 0.69,
      },
    },
    {
      dt: 1640746800,
      temp: 277.56,
      feels_like: 274.67,
      pressure: 1005,
      humidity: 92,
      dew_point: 276.01,
      uvi: 0,
      clouds: 100,
      visibility: 10000,
      wind_speed: 3.39,
      wind_deg: 47,
      wind_gust: 6.96,
      weather: [
        {
          id: 501,
          main: 'Rain',
          description: 'moderate rain',
          icon: '10n',
        },
      ],
      pop: 1,
      rain: {
        '1h': 2.33,
      },
    },
    {
      dt: 1640750400,
      temp: 277.95,
      feels_like: 276.42,
      pressure: 1005,
      humidity: 95,
      dew_point: 276.86,
      uvi: 0,
      clouds: 100,
      visibility: 7457,
      wind_speed: 1.87,
      wind_deg: 91,
      wind_gust: 3.64,
      weather: [
        {
          id: 502,
          main: 'Rain',
          description: 'heavy intensity rain',
          icon: '10n',
        },
      ],
      pop: 1,
      rain: {
        '1h': 4.8,
      },
    },
    {
      dt: 1640754000,
      temp: 278.78,
      feels_like: 278.78,
      pressure: 1005,
      humidity: 96,
      dew_point: 277.83,
      uvi: 0,
      clouds: 100,
      visibility: 10000,
      wind_speed: 0.47,
      wind_deg: 58,
      wind_gust: 0.63,
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10n',
        },
      ],
      pop: 1,
      rain: {
        '1h': 0.71,
      },
    },
    {
      dt: 1640757600,
      temp: 279.04,
      feels_like: 279.04,
      pressure: 1005,
      humidity: 96,
      dew_point: 278.11,
      uvi: 0,
      clouds: 100,
      visibility: 10000,
      wind_speed: 0.29,
      wind_deg: 254,
      wind_gust: 0.59,
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10n',
        },
      ],
      pop: 1,
      rain: {
        '1h': 0.41,
      },
    },
    {
      dt: 1640761200,
      temp: 279.35,
      feels_like: 278.59,
      pressure: 1006,
      humidity: 96,
      dew_point: 278.4,
      uvi: 0,
      clouds: 99,
      visibility: 10000,
      wind_speed: 1.4,
      wind_deg: 198,
      wind_gust: 2.86,
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04n',
        },
      ],
      pop: 0.41,
    },
    {
      dt: 1640764800,
      temp: 279.46,
      feels_like: 279.46,
      pressure: 1007,
      humidity: 97,
      dew_point: 278.69,
      uvi: 0,
      clouds: 98,
      visibility: 10000,
      wind_speed: 1.27,
      wind_deg: 239,
      wind_gust: 2.53,
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10n',
        },
      ],
      pop: 0.53,
      rain: {
        '1h': 0.2,
      },
    },
    {
      dt: 1640768400,
      temp: 279.67,
      feels_like: 278.63,
      pressure: 1008,
      humidity: 97,
      dew_point: 278.9,
      uvi: 0,
      clouds: 99,
      visibility: 10000,
      wind_speed: 1.67,
      wind_deg: 225,
      wind_gust: 5.42,
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04n',
        },
      ],
      pop: 0.49,
    },
    {
      dt: 1640772000,
      temp: 279.47,
      feels_like: 278.53,
      pressure: 1008,
      humidity: 97,
      dew_point: 278.68,
      uvi: 0,
      clouds: 99,
      visibility: 10000,
      wind_speed: 1.56,
      wind_deg: 238,
      wind_gust: 3.73,
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04n',
        },
      ],
      pop: 0.45,
    },
    {
      dt: 1640775600,
      temp: 279.48,
      feels_like: 278.55,
      pressure: 1009,
      humidity: 96,
      dew_point: 278.56,
      uvi: 0,
      clouds: 99,
      visibility: 10000,
      wind_speed: 1.55,
      wind_deg: 263,
      wind_gust: 5.15,
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04n',
        },
      ],
      pop: 0.41,
    },
    {
      dt: 1640779200,
      temp: 279.62,
      feels_like: 277.97,
      pressure: 1011,
      humidity: 95,
      dew_point: 278.6,
      uvi: 0,
      clouds: 99,
      visibility: 10000,
      wind_speed: 2.28,
      wind_deg: 230,
      wind_gust: 7.06,
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04n',
        },
      ],
      pop: 0.33,
    },
    {
      dt: 1640782800,
      temp: 279.08,
      feels_like: 277.66,
      pressure: 1011,
      humidity: 97,
      dew_point: 278.3,
      uvi: 0,
      clouds: 100,
      visibility: 10000,
      wind_speed: 1.94,
      wind_deg: 246,
      wind_gust: 5.31,
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d',
        },
      ],
      pop: 0.08,
    },
    {
      dt: 1640786400,
      temp: 279.47,
      feels_like: 279.47,
      pressure: 1011,
      humidity: 95,
      dew_point: 278.38,
      uvi: 0.31,
      clouds: 98,
      visibility: 10000,
      wind_speed: 1.24,
      wind_deg: 290,
      wind_gust: 4.46,
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d',
        },
      ],
      pop: 0,
    },
    {
      dt: 1640790000,
      temp: 280.62,
      feels_like: 279.46,
      pressure: 1011,
      humidity: 88,
      dew_point: 278.43,
      uvi: 0.78,
      clouds: 88,
      visibility: 10000,
      wind_speed: 1.93,
      wind_deg: 267,
      wind_gust: 4.44,
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d',
        },
      ],
      pop: 0,
    },
    {
      dt: 1640793600,
      temp: 281.73,
      feels_like: 280.35,
      pressure: 1012,
      humidity: 84,
      dew_point: 278.91,
      uvi: 1.06,
      clouds: 90,
      visibility: 10000,
      wind_speed: 2.42,
      wind_deg: 260,
      wind_gust: 5.05,
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d',
        },
      ],
      pop: 0,
    },
    {
      dt: 1640797200,
      temp: 282.47,
      feels_like: 280.94,
      pressure: 1012,
      humidity: 82,
      dew_point: 279.21,
      uvi: 1.31,
      clouds: 92,
      visibility: 10000,
      wind_speed: 2.85,
      wind_deg: 267,
      wind_gust: 5.59,
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d',
        },
      ],
      pop: 0,
    },
    {
      dt: 1640800800,
      temp: 282.58,
      feels_like: 281.01,
      pressure: 1011,
      humidity: 81,
      dew_point: 279.19,
      uvi: 1.25,
      clouds: 93,
      visibility: 10000,
      wind_speed: 2.95,
      wind_deg: 277,
      wind_gust: 5.8,
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d',
        },
      ],
      pop: 0,
    },
    {
      dt: 1640804400,
      temp: 282.16,
      feels_like: 280.63,
      pressure: 1012,
      humidity: 83,
      dew_point: 278.98,
      uvi: 0.6,
      clouds: 100,
      visibility: 10000,
      wind_speed: 2.75,
      wind_deg: 291,
      wind_gust: 5.63,
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d',
        },
      ],
      pop: 0,
    },
    {
      dt: 1640808000,
      temp: 281.7,
      feels_like: 280.46,
      pressure: 1012,
      humidity: 84,
      dew_point: 278.87,
      uvi: 0.32,
      clouds: 100,
      visibility: 10000,
      wind_speed: 2.23,
      wind_deg: 292,
      wind_gust: 5.74,
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d',
        },
      ],
      pop: 0,
    },
    {
      dt: 1640811600,
      temp: 281.54,
      feels_like: 280.57,
      pressure: 1013,
      humidity: 85,
      dew_point: 278.85,
      uvi: 0.11,
      clouds: 100,
      visibility: 10000,
      wind_speed: 1.89,
      wind_deg: 289,
      wind_gust: 5.93,
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d',
        },
      ],
      pop: 0,
    },
    {
      dt: 1640815200,
      temp: 280.94,
      feels_like: 280.22,
      pressure: 1013,
      humidity: 88,
      dew_point: 278.77,
      uvi: 0,
      clouds: 100,
      visibility: 10000,
      wind_speed: 1.55,
      wind_deg: 293,
      wind_gust: 4.78,
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d',
        },
      ],
      pop: 0,
    },
    {
      dt: 1640818800,
      temp: 280.51,
      feels_like: 279.91,
      pressure: 1014,
      humidity: 90,
      dew_point: 278.54,
      uvi: 0,
      clouds: 100,
      visibility: 10000,
      wind_speed: 1.4,
      wind_deg: 302,
      wind_gust: 4.64,
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04n',
        },
      ],
      pop: 0,
    },
    {
      dt: 1640822400,
      temp: 280.19,
      feels_like: 280.19,
      pressure: 1014,
      humidity: 90,
      dew_point: 278.35,
      uvi: 0,
      clouds: 100,
      visibility: 10000,
      wind_speed: 0.83,
      wind_deg: 331,
      wind_gust: 1.53,
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04n',
        },
      ],
      pop: 0,
    },
    {
      dt: 1640826000,
      temp: 279.76,
      feels_like: 279.76,
      pressure: 1014,
      humidity: 91,
      dew_point: 278.07,
      uvi: 0,
      clouds: 99,
      visibility: 10000,
      wind_speed: 0.91,
      wind_deg: 17,
      wind_gust: 0.99,
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04n',
        },
      ],
      pop: 0,
    },
    {
      dt: 1640829600,
      temp: 279.48,
      feels_like: 279.48,
      pressure: 1013,
      humidity: 91,
      dew_point: 277.83,
      uvi: 0,
      clouds: 99,
      visibility: 10000,
      wind_speed: 0.79,
      wind_deg: 135,
      wind_gust: 0.74,
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04n',
        },
      ],
      pop: 0,
    },
    {
      dt: 1640833200,
      temp: 279.6,
      feels_like: 279.6,
      pressure: 1014,
      humidity: 91,
      dew_point: 277.89,
      uvi: 0,
      clouds: 100,
      visibility: 10000,
      wind_speed: 0.55,
      wind_deg: 151,
      wind_gust: 0.69,
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04n',
        },
      ],
      pop: 0,
    },
    {
      dt: 1640836800,
      temp: 279.53,
      feels_like: 279.53,
      pressure: 1014,
      humidity: 92,
      dew_point: 277.98,
      uvi: 0,
      clouds: 100,
      visibility: 10000,
      wind_speed: 0.96,
      wind_deg: 125,
      wind_gust: 0.98,
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04n',
        },
      ],
      pop: 0,
    },
    {
      dt: 1640840400,
      temp: 279.65,
      feels_like: 279.65,
      pressure: 1013,
      humidity: 92,
      dew_point: 278.12,
      uvi: 0,
      clouds: 100,
      visibility: 10000,
      wind_speed: 0.81,
      wind_deg: 133,
      wind_gust: 0.85,
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04n',
        },
      ],
      pop: 0,
    },
    {
      dt: 1640844000,
      temp: 279.55,
      feels_like: 279.55,
      pressure: 1012,
      humidity: 94,
      dew_point: 278.24,
      uvi: 0,
      clouds: 100,
      visibility: 10000,
      wind_speed: 1.29,
      wind_deg: 124,
      wind_gust: 2.1,
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04n',
        },
      ],
      pop: 0,
    },
    {
      dt: 1640847600,
      temp: 279.74,
      feels_like: 279.74,
      pressure: 1012,
      humidity: 94,
      dew_point: 278.51,
      uvi: 0,
      clouds: 98,
      visibility: 10000,
      wind_speed: 0.71,
      wind_deg: 128,
      wind_gust: 0.91,
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10n',
        },
      ],
      pop: 0.36,
      rain: {
        '1h': 0.14,
      },
    },
    {
      dt: 1640851200,
      temp: 280.04,
      feels_like: 278.81,
      pressure: 1011,
      humidity: 95,
      dew_point: 278.94,
      uvi: 0,
      clouds: 99,
      visibility: 10000,
      wind_speed: 1.91,
      wind_deg: 158,
      wind_gust: 4.85,
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10n',
        },
      ],
      pop: 0.44,
      rain: {
        '1h': 0.34,
      },
    },
    {
      dt: 1640854800,
      temp: 280.35,
      feels_like: 279.77,
      pressure: 1010,
      humidity: 96,
      dew_point: 279.39,
      uvi: 0,
      clouds: 99,
      visibility: 10000,
      wind_speed: 1.37,
      wind_deg: 132,
      wind_gust: 2.84,
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10n',
        },
      ],
      pop: 0.58,
      rain: {
        '1h': 0.11,
      },
    },
    {
      dt: 1640858400,
      temp: 280.36,
      feels_like: 280.36,
      pressure: 1010,
      humidity: 98,
      dew_point: 279.64,
      uvi: 0,
      clouds: 96,
      visibility: 10000,
      wind_speed: 0.12,
      wind_deg: 57,
      wind_gust: 1.76,
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04n',
        },
      ],
      pop: 0.72,
    },
    {
      dt: 1640862000,
      temp: 280.85,
      feels_like: 279.69,
      pressure: 1011,
      humidity: 98,
      dew_point: 280.25,
      uvi: 0,
      clouds: 96,
      visibility: 10000,
      wind_speed: 1.97,
      wind_deg: 292,
      wind_gust: 4.2,
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10n',
        },
      ],
      pop: 0.88,
      rain: {
        '1h': 0.9,
      },
    },
    {
      dt: 1640865600,
      temp: 280.29,
      feels_like: 279.04,
      pressure: 1012,
      humidity: 96,
      dew_point: 279.35,
      uvi: 0,
      clouds: 97,
      visibility: 10000,
      wind_speed: 1.97,
      wind_deg: 349,
      wind_gust: 4.65,
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10n',
        },
      ],
      pop: 0.94,
      rain: {
        '1h': 0.28,
      },
    },
    {
      dt: 1640869200,
      temp: 279.76,
      feels_like: 278.6,
      pressure: 1013,
      humidity: 94,
      dew_point: 278.48,
      uvi: 0,
      clouds: 100,
      visibility: 10000,
      wind_speed: 1.79,
      wind_deg: 346,
      wind_gust: 3.84,
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d',
        },
      ],
      pop: 0.61,
    },
    {
      dt: 1640872800,
      temp: 279.8,
      feels_like: 279.8,
      pressure: 1013,
      humidity: 92,
      dew_point: 278.14,
      uvi: 0.22,
      clouds: 100,
      visibility: 10000,
      wind_speed: 0.99,
      wind_deg: 31,
      wind_gust: 1.68,
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d',
        },
      ],
      pop: 0.53,
    },
    {
      dt: 1640876400,
      temp: 280.71,
      feels_like: 280.71,
      pressure: 1014,
      humidity: 87,
      dew_point: 278.33,
      uvi: 0.56,
      clouds: 88,
      visibility: 10000,
      wind_speed: 0.54,
      wind_deg: 297,
      wind_gust: 1.15,
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d',
        },
      ],
      pop: 0.44,
    },
    {
      dt: 1640880000,
      temp: 281.98,
      feels_like: 281.98,
      pressure: 1013,
      humidity: 82,
      dew_point: 278.77,
      uvi: 1.23,
      clouds: 84,
      visibility: 10000,
      wind_speed: 0.88,
      wind_deg: 229,
      wind_gust: 1.84,
      weather: [
        {
          id: 803,
          main: 'Clouds',
          description: 'broken clouds',
          icon: '04d',
        },
      ],
      pop: 0.42,
    },
    {
      dt: 1640883600,
      temp: 282.98,
      feels_like: 282.98,
      pressure: 1012,
      humidity: 79,
      dew_point: 279.16,
      uvi: 1.52,
      clouds: 81,
      visibility: 10000,
      wind_speed: 1.31,
      wind_deg: 264,
      wind_gust: 2.69,
      weather: [
        {
          id: 803,
          main: 'Clouds',
          description: 'broken clouds',
          icon: '04d',
        },
      ],
      pop: 0.34,
    },
  ],
  daily: [
    {
      dt: 1640710800,
      sunrise: 1640695346,
      sunset: 1640728840,
      moonrise: 1640673300,
      moonset: 1640715000,
      moon_phase: 0.81,
      temp: {
        day: 280.84,
        min: 277.56,
        max: 283.45,
        night: 277.95,
        eve: 278.33,
        morn: 278.71,
      },
      feels_like: {
        day: 280.84,
        night: 276.42,
        eve: 275.62,
        morn: 277,
      },
      pressure: 1011,
      humidity: 57,
      dew_point: 272.9,
      wind_speed: 5.17,
      wind_deg: 302,
      wind_gust: 10.66,
      weather: [
        {
          id: 502,
          main: 'Rain',
          description: 'heavy intensity rain',
          icon: '10d',
        },
      ],
      clouds: 99,
      pop: 1,
      rain: 9.04,
      uvi: 1.09,
    },
    {
      dt: 1640797200,
      sunrise: 1640781760,
      sunset: 1640815283,
      moonrise: 1640764020,
      moonset: 1640803140,
      moon_phase: 0.84,
      temp: {
        day: 282.47,
        min: 278.78,
        max: 282.58,
        night: 279.53,
        eve: 280.51,
        morn: 279.48,
      },
      feels_like: {
        day: 280.94,
        night: 279.53,
        eve: 279.91,
        morn: 278.55,
      },
      pressure: 1012,
      humidity: 82,
      dew_point: 279.21,
      wind_speed: 2.95,
      wind_deg: 277,
      wind_gust: 7.06,
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10d',
        },
      ],
      clouds: 92,
      pop: 1,
      rain: 1.32,
      uvi: 1.31,
    },
    {
      dt: 1640883600,
      sunrise: 1640868172,
      sunset: 1640901728,
      moonrise: 1640854980,
      moonset: 1640891580,
      moon_phase: 0.88,
      temp: {
        day: 282.98,
        min: 279.55,
        max: 284.12,
        night: 279.8,
        eve: 282.3,
        morn: 280.85,
      },
      feels_like: {
        day: 282.98,
        night: 279.8,
        eve: 282.3,
        morn: 279.69,
      },
      pressure: 1012,
      humidity: 79,
      dew_point: 279.16,
      wind_speed: 2.33,
      wind_deg: 274,
      wind_gust: 4.91,
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10d',
        },
      ],
      clouds: 81,
      pop: 0.94,
      rain: 1.77,
      uvi: 1.52,
    },
    {
      dt: 1640970000,
      sunrise: 1640954581,
      sunset: 1640988174,
      moonrise: 1640946060,
      moonset: 1640980560,
      moon_phase: 0.92,
      temp: {
        day: 284.1,
        min: 279.62,
        max: 284.1,
        night: 282.63,
        eve: 282.2,
        morn: 280.71,
      },
      feels_like: {
        day: 283.44,
        night: 281.73,
        eve: 281.66,
        morn: 279.91,
      },
      pressure: 1010,
      humidity: 84,
      dew_point: 281.09,
      wind_speed: 2.35,
      wind_deg: 231,
      wind_gust: 7.88,
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10d',
        },
      ],
      clouds: 70,
      pop: 0.34,
      rain: 0.17,
      uvi: 0.93,
    },
    {
      dt: 1641056400,
      sunrise: 1641040989,
      sunset: 1641074622,
      moonrise: 1641037140,
      moonset: 1641070200,
      moon_phase: 0.96,
      temp: {
        day: 284.74,
        min: 282.08,
        max: 284.74,
        night: 282.08,
        eve: 282.3,
        morn: 284.42,
      },
      feels_like: {
        day: 284.41,
        night: 280.81,
        eve: 281.46,
        morn: 284.11,
      },
      pressure: 1006,
      humidity: 94,
      dew_point: 283.46,
      wind_speed: 2.78,
      wind_deg: 220,
      wind_gust: 11.19,
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10d',
        },
      ],
      clouds: 100,
      pop: 1,
      rain: 6.98,
      uvi: 0.63,
    },
    {
      dt: 1641142800,
      sunrise: 1641127394,
      sunset: 1641161072,
      moonrise: 1641127860,
      moonset: 1641160440,
      moon_phase: 0,
      temp: {
        day: 276.41,
        min: 270.93,
        max: 282.2,
        night: 270.93,
        eve: 271.6,
        morn: 282.2,
      },
      feels_like: {
        day: 272.35,
        night: 265.7,
        eve: 266.7,
        morn: 281.52,
      },
      pressure: 1004,
      humidity: 83,
      dew_point: 273.39,
      wind_speed: 5.17,
      wind_deg: 328,
      wind_gust: 11.87,
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10d',
        },
      ],
      clouds: 100,
      pop: 0.85,
      rain: 2.71,
      uvi: 1,
    },
    {
      dt: 1641229200,
      sunrise: 1641213797,
      sunset: 1641247523,
      moonrise: 1641217920,
      moonset: 1641251280,
      moon_phase: 0.04,
      temp: {
        day: 270.73,
        min: 268.55,
        max: 271.26,
        night: 269.09,
        eve: 269.76,
        morn: 268.55,
      },
      feels_like: {
        day: 264.76,
        night: 263.85,
        eve: 264.58,
        morn: 262.32,
      },
      pressure: 1027,
      humidity: 47,
      dew_point: 260.69,
      wind_speed: 5.76,
      wind_deg: 285,
      wind_gust: 10.91,
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d',
        },
      ],
      clouds: 90,
      pop: 0.18,
      uvi: 1,
    },
    {
      dt: 1641315600,
      sunrise: 1641300197,
      sunset: 1641333976,
      moonrise: 1641307260,
      moonset: 1641342240,
      moon_phase: 0.07,
      temp: {
        day: 271.88,
        min: 267.42,
        max: 272.07,
        night: 269.26,
        eve: 269.9,
        morn: 267.42,
      },
      feels_like: {
        day: 267.28,
        night: 265.12,
        eve: 266.06,
        morn: 262.44,
      },
      pressure: 1036,
      humidity: 52,
      dew_point: 262.98,
      wind_speed: 4.03,
      wind_deg: 309,
      wind_gust: 8.88,
      weather: [
        {
          id: 803,
          main: 'Clouds',
          description: 'broken clouds',
          icon: '04d',
        },
      ],
      clouds: 62,
      pop: 0,
      uvi: 1,
    },
  ],
};

let currentWeather = new RenderWeather(
  json.processWeatherData(dataJson),
  '.weather-container',
  true,
);

let forecastWeather = new RenderForecast(
  json.processForecastData(jsonForecastData),
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
    const carousel = new Carousel('.page-hours', '.weather-forecast-cards');
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

async function findWeather(evt) {
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
}

function init() {
  //renderInitialWeather();
  renderWeather();
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
