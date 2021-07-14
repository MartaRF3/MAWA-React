import React from 'react';

let ForecastDay = () => {
  return (
    <div className="forecast__card">
    <p className="forecast__date">date</p>
    <p className="forecast__emoji">iconCode</p>
    <p className="forecast__temperature">
      <span className="temp">minTemp</span><span className="temp-format">°C</span> /
      <span className="temp">maxTemp</span><span className="temp-format">°C</span>
    </p>
  </div>
  )
}

export default ForecastDay;