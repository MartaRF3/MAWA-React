import React from 'react';

import IconData from './IconData';

let ForecastDay = ({ forecast }) => {
  console.log(forecast)
  let date = new Date(forecast.dt * 1000).toLocaleDateString('es-ES', {weekday: 'short', day: '2-digit', month: '2-digit' })
  let iconCode = forecast.weather[0].icon;
  let emoji = IconData.find(x => x.iconCode === iconCode).emoji;
  return (
    <div className="forecast__card">
    <p className="forecast__date">{date}</p>
    <p className="forecast__emoji">{emoji}</p>
    <p className="forecast__temperature">
      <span className="temp">{Math.round(forecast.temp.min)}</span><span className="temp-format">°C</span> /
      <span className="temp">{Math.round(forecast.temp.max)}</span><span className="temp-format">°C</span>
    </p>
  </div>
  )
}

export default ForecastDay;