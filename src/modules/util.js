function kelvinToCelcius(kelvinValue) {
  return Math.round(kelvinValue - 273.15);
}

function kelvinToFahrenheit(kelvinValue) {
  return Math.round(kelvinValue * 1.8 - 459.67);
}

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
    return hpaValue;
  }

  #hectopascalsToInches(hpaValue) {
    return Math.round(29.92 * (hpaValue / 1013.2));
  }

  #msToKph(speed) {
    return Math.round(speed * 3.6);
  }

  #msToMph(speed) {
    return Math.round(speed / 0.44704);
  }

  #metersToKm(dist) {
    return Math.round(dist / 1000);
  }

  #meterstoMi(dist) {
    return Math.round(dist / 1609.344);
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

export { kelvinToCelcius, kelvinToFahrenheit, UnitConversion };
