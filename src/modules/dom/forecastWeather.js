import { UnitConversion, capitalizeWords } from '../util.js';

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
    const converter = new UnitConversion(this.isMetric);
    if (data.tempMax && data.tempMin) {
      let p1 = document.createElement('p');
      const tempMax = converter.convertTemperature(data.tempMax);
      p1.innerHTML = `${tempMax[0]} ${tempMax[1]}`;
      parentElement.appendChild(p1);

      let p2 = document.createElement('p');
      const tempMin = converter.convertTemperature(data.tempMin);
      p2.innerHTML = `${tempMin[0]} ${tempMin[1]}`;
      parentElement.appendChild(p2);
    } else {
      let p1 = document.createElement('p');
      const temp = converter.convertTemperature(data.temp);
      p1.innerHTML = `${temp[0]} ${temp[1]}`;
      parentElement.appendChild(p1);
    }
  }

  #renderCard(parentElement, cardTitle, data) {
    let p1 = document.createElement('p');
    p1.innerHTML = `${cardTitle}`;
    parentElement.appendChild(p1);

    this.#cardTemperature(parentElement, data);

    let p4 = document.createElement('p');
    p4.innerHTML = `${capitalizeWords(data.conditions)}`;
    parentElement.appendChild(p4);
  }

  render() {
    if (this._isHourly === true) {
      this.weatherData.hourlyForecast.slice(1, 25).forEach((hour, index) => {
        let card = document.createElement('div');
        card.className = 'forecast-card';
        let time = new Date(
          hour.dt * 1000 + this.weatherData.timezone * 1000,
        ).toLocaleString('en-US', {
          hour: 'numeric',
          minute: 'numeric',
          hour12: true,
          timeZone: 'UTC',
        });
        this.#renderCard(card, time, hour);
        this.container.appendChild(card);
      });
    } else {
      this.weatherData.dailyForecast.forEach((day, index) => {
        let card = document.createElement('div');
        card.className = 'forecast-card';
        let dayWeek = new Date(
          day.dt * 1000 + this.weatherData.timezone * 1000,
        ).toLocaleDateString('en-US', {
          weekday: 'long',
          timeZone: 'UTC',
        });
        this.#renderCard(card, dayWeek, day);
        this.container.appendChild(card);
      });
    }
  }
}

export { RenderForecast };
