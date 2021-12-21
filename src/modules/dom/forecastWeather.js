import { kelvinToCelcius, kelvinToFahrenheit } from '../util.js';

class RenderForecast {
  constructor(weatherData, containerClass, isHourly = false, isMetric = false) {
    this.weatherData = weatherData;
    this.isMetric = isMetric;
    this.isHourly = isHourly;
    this.container = document.querySelector(containerClass);
  }

  set isMetric(metric) {
    this._isMetric = metric;
  }

  get isMetric() {
    return this._isMetric;
  }

  set isHourly(hourly) {
    this._isHourly = hourly;
  }

  get isHourly() {
    return this._isHourly;
  }

  #cardTemperature(parentElement, data) {
    if (data.tempMax && data.tempMin) {
      let p1 = document.createElement('p');
      let tempMax, tempMin;
      if (this.isMetric) {
        tempMax = `${kelvinToCelcius(data.tempMax)} C`;
        tempMin = `${kelvinToCelcius(data.tempMin)} C`;
      } else {
        tempMax = `${kelvinToFahrenheit(data.tempMax)} F`;
        tempMin = `${kelvinToFahrenheit(data.tempMin)} F`;
      }
      p1.innerHTML = tempMax;
      parentElement.appendChild(p1);

      let p2 = document.createElement('p');
      p2.innerHTML = tempMin;
      parentElement.appendChild(p2);
    } else {
      let temp;
      if (this.isMetric) {
        temp = `${kelvinToCelcius(data.temp)} C`;
      } else {
        temp = `${kelvinToFahrenheit(data.temp)} F`;
      }
      let p1 = document.createElement('p');
      p1.innerHTML = temp;
      parentElement.appendChild(p1);
    }
  }

  #renderCard(parentElement, cardTitle, data) {
    let p1 = document.createElement('p');
    p1.innerHTML = `${cardTitle}`;
    parentElement.appendChild(p1);

    this.#cardTemperature(parentElement, data);

    let p4 = document.createElement('p');
    p4.innerHTML = `${data.conditions}`;
    parentElement.appendChild(p4);
  }

  render() {
    if (this._isHourly === true) {
      this.weatherData.hourlyForecast.forEach((hour, index) => {
        let card = document.createElement('div');
        card.className = 'forecast-card';
        let time = new Date(hour.dt * 1000).toLocaleString('en-US', {
          hour: 'numeric',
          minute: 'numeric',
          hour12: true,
        });
        this.#renderCard(card, time, hour);
        this.container.appendChild(card);
      });
    } else {
      this.weatherData.dailyForecast.forEach((day, index) => {
        let card = document.createElement('div');
        card.className = 'forecast-card';
        let dayWeek = new Date(day.dt * 1000).toLocaleDateString('en-US', {
          weekday: 'long',
        });
        this.#renderCard(card, dayWeek, day);
        this.container.appendChild(card);
      });
    }
  }
}

export { RenderForecast };
