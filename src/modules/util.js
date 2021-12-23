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

export { UnitConversion };
