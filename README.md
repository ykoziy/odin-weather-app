# The Odin Project: Weather App

[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=ykoziy_odin-weather-app&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=ykoziy_odin-weather-app) [![Lines of Code](https://sonarcloud.io/api/project_badges/measure?project=ykoziy_odin-weather-app&metric=ncloc)](https://sonarcloud.io/summary/new_code?id=ykoziy_odin-weather-app) [![Bugs](https://sonarcloud.io/api/project_badges/measure?project=ykoziy_odin-weather-app&metric=bugs)](https://sonarcloud.io/summary/new_code?id=ykoziy_odin-weather-app) [![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=ykoziy_odin-weather-app&metric=code_smells)](https://sonarcloud.io/summary/new_code?id=ykoziy_odin-weather-app)

An app where user can search for current weather and the forecast of a location.

# Features

- displaying hourly and daily forecasts
- switch between imperial and metric units
- background image depends on the current weather conditions
- weather conditions icons (missing icons for special weather conditions...)

# <a href="https://ykoziy.github.io/odin-weather-app/" target="_blank">App</a>

<p align="center">
  <img src="https://raw.githubusercontent.com/ykoziy/odin-weather-app/main/app_preview.jpg" width="900"/>
</p>

## Challenges
- creating layout the way it was planned
- creating hourly slide display. Not remembering: A page element with relative positioning gives you the control to absolutely position children elements inside of it!!!
- await pauses its parent function, can create unwanted side effects if you dont watch out for this

## Credits

### Background images (<a href="https://unsplash.com/" target="_blank">unsplash.com</a>):

- <a href="https://raw.githubusercontent.com/ykoziy/odin-weather-app/main/dist/img/weather-background/clear-bg.jpg" target="_blank">Clear sky background</a> Photo by <a href="https://unsplash.com/@jakke?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Jake Gard</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
- <a href="https://raw.githubusercontent.com/ykoziy/odin-weather-app/main/dist/img/weather-background/clouds-bg.jpg" target="_blank">Clouds background</a> Photo by <a href="https://unsplash.com/@sebamolinafotografia?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Sebastian Molina fotografía</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
- <a href="https://raw.githubusercontent.com/ykoziy/odin-weather-app/main/dist/img/weather-background/rain-bg.jpg" target="_blank">Rain background</a> Photo by <a href="https://unsplash.com/@anant347?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Anant Chandra</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
- <a href="https://raw.githubusercontent.com/ykoziy/odin-weather-app/main/dist/img/weather-background/snow-bg.jpg" target="_blank">Snow background</a> Photo by <a href="https://unsplash.com/@owenjw99?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Owen Woodhouse</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
- <a href="https://raw.githubusercontent.com/ykoziy/odin-weather-app/main/dist/img/weather-background/thunder-bg.jpg" target="_blank">Thunderstorm background</a> Photo by <a href="https://unsplash.com/@mantasos?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Tasos Mansour</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>

### Icons

- <a href="https://www.svgrepo.com/collection/fluent-ui-icons-filled/21" target="_blank">Weather conditions icons</a> Icons from Microsoft, Fluent UI
- <a href="https://www.carbondesignsystem.com/guidelines/icons/library" target="_blank">Other weather icons</a> Icons from IBM, Carbon Design System
