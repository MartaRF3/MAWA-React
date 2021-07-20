import React from 'react';

import ForecastDay from "./ForecastDay";

let Forecast = ({forecastArray}) => {
  // Shorten the forecast array to five days
  let shortForecast = forecastArray.slice(0, 5);
  let paintForecastDay = (el) => {
    return <ForecastDay forecast={shortForecast[shortForecast.indexOf(el)]} />
  }

  // return a day element for each element in the array
  return (
    <section className="section forecast">
      <div className="forecast__container">
        {shortForecast.map(paintForecastDay)}
      </div>
    </section>
  )
}

export default Forecast;