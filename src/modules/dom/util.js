function getWeatherIcon(weatherConditions) {
  const weatherIcons = {
    clear: 'img/icons/clear-w.svg',
    clouds: 'img/icons/clouds-w.svg',
    rain: 'img/icons/rain-w.svg',
    snow: 'img/icons/snow-w.svg',
    thunder: 'img/icons/thunder-w.svg',
  };

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

export { getWeatherIcon, toggleActiveButton };
