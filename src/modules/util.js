class UnitConversion {
  constructor(isMetric) {
    this.isMetric = isMetric;
  }

  set isMetric(metric) {
    this._isMetric = metric;
  }

  get isMetric() {
    return this._isMetric;
  }

  #kelvinToCelcius(kelvinValue) {
    return Math.round(kelvinValue - 273.15);
  }

  #kelvinToFahrenheit(kelvinValue) {
    return Math.round(kelvinValue * 1.8 - 459.67);
  }

  #hectopascalsToMillibar(hpaValue) {
    return hpaValue.toFixed(1);
  }

  #hectopascalsToInches(hpaValue) {
    return (29.92 * (hpaValue / 1013.2)).toFixed(2);
  }

  #msToKph(speed) {
    return (speed * 3.6).toFixed(1);
  }

  #msToMph(speed) {
    return (speed / 0.44704).toFixed(1);
  }

  #metersToKm(dist) {
    return (dist / 1000).toFixed(1);
  }

  #meterstoMi(dist) {
    return (dist / 1609.344).toFixed(1);
  }

  convertPressure(pressure) {
    if (this.isMetric) {
      return [this.#hectopascalsToMillibar(pressure), 'mb'];
    } else {
      return [this.#hectopascalsToInches(pressure), 'in'];
    }
  }

  convertTemperature(temperature) {
    if (this.isMetric) {
      return [this.#kelvinToCelcius(temperature), 'C'];
    } else {
      return [this.#kelvinToFahrenheit(temperature), 'F'];
    }
  }

  convertDistance(distance) {
    if (this.isMetric) {
      return [this.#metersToKm(distance), 'km'];
    } else {
      return [this.#meterstoMi(distance), 'mi'];
    }
  }

  convertSpeed(speed) {
    if (this.isMetric) {
      return [this.#msToKph(speed), 'km/h'];
    } else {
      return [this.#msToMph(speed), 'mph'];
    }
  }
}

function capitalizeWords(str) {
  return str
    .split(' ')
    .map((word) => word[0].toUpperCase() + word.substr(1))
    .join(' ');
}

function getWeatherIcon(weatherConditions) {
  const weatherIcons = {
    clear: 'img/icons/clear-w.svg',
    clouds: 'img/icons/clouds-w.svg',
    rain: 'img/icons/rain-w.svg',
    snow: 'img/icons/snow-w.svg',
    thunder: 'img/icons/thunder-w.svg',
  };

  const body = document.getElementsByTagName('body')[0];
  if (weatherConditions.includes('clear')) {
    return weatherIcons.clear;
  } else if (weatherConditions.includes('clouds')) {
    return weatherIcons.clouds;
  } else if (
    weatherConditions.includes('rain') ||
    weatherConditions.includes('drizzle')
  ) {
    return weatherIcons.rain;
  } else if (weatherConditions.includes('snow')) {
    return weatherIcons.snow;
  } else if (weatherConditions.includes('thunder')) {
    return weatherIcons.thunder;
  }
}

function toggleActiveButton(buttons, target) {
  buttons.forEach((button) => {
    if (button === target && !button.classList.contains('active-btn')) {
      return button.classList.add('active-btn');
    }
    return button.classList.remove('active-btn');
  });
}

export { UnitConversion, capitalizeWords, getWeatherIcon, toggleActiveButton };
