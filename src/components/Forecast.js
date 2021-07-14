import React from 'react';

import ForecastDay from "./ForecastDay";

let Forecast = ({forecastArray}) => {
  console.log(forecastArray);
  // return a day element for each element in the array
  return (
    <div>
      <ForecastDay />
    </div>
  )
}

export default Forecast;