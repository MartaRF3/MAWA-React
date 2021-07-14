import React, {useState} from 'react';
import axios from 'axios';
import IconData from './IconData';

import ForecastCard from './ForecastCard';

let Forecast = ({APIKey, lat, long}) => {
  let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=current,minutely,hourly,alerts&appid=${APIKey}&units=metric`

  let [forecastArray, setForecastArray] = useState('');

  let updateData = (response) => {
    console.log(response)
    setForecastArray(response.data.daily);
    console.log(forecastArray);
  }

  axios.get(url)
    .then(updateData)
    .catch(error => console.log(error))

  return (
    <div className="forecast">

    </div>
  )
}

export default Forecast;