import React, {useState} from 'react';
import axios from 'axios';
import IconData from './IconData';

function Current(props) {

  let APIKey = "e61181eedc6dee94a571b45ef2692956";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.cityName}&appid=${APIKey}&units=metric`;

  let [minTemp, setMinTemp] = useState('');
  let [maxTemp, setMaxTemp] = useState('');
  let [wind, setWind] = useState('');
  let [humidity, setHumidity] = useState('');
  let [description, setDescription] = useState('');
  let [code, setCode] = useState('');
  let [emoji, setEmoji] = useState('');

  let updateData = (response) => {
    setMinTemp(Math.round(response.data.main.temp_min));
    setMaxTemp(Math.round(response.data.main.temp_max));
    setWind(Math.round(response.data.wind.speed));
    setHumidity(Math.round(response.data.main.humidity));
    setDescription(response.data.weather[0].description);
    setCode(response.data.weather[0].icon);
    setEmoji(IconData.find(x => x.iconCode === code).emoji);
  }
  
  axios.get(url)
    .then(updateData)
    .catch(error => console.log(error))
  if (minTemp) {
    return (
      <div className="current">
        <h1 className="current__title">{props.cityName}</h1>
        <p className="current__date"></p>
        <p className="current__temperature">
          <span>{emoji}</span>
          <span>{minTemp}</span><span className="temp-format">°C</span> /
          <span>{maxTemp}</span><span className="temp-format">°C</span>
        </p>
        <p>Wind speed: {wind}m/s</p>
        <p>Humidity: {humidity}%</p>
        <p>Description: {description}</p>
        <div className="temp-converter">
          <button id="converter">See in °F</button>
        </div>
      </div>
    )
  } else {
    return (
      <div className="current">
        <p className="current__date">Introduce a city to find out about its weather</p>
      </div>
    )
  }
};

export default Current;
