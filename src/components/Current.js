import React, {useState} from 'react';

import IconData from './IconData';

let Current = ({weatherData}) => {

  let [isCelsius, setIsCelsius] = useState(true);

  let showTempConverter = () => {
    let tempConverterBox = document.querySelector(".temp-converter");
    tempConverterBox.style.display = "inline-block";

    setTimeout(function() {
      tempConverterBox.style.display = "none";
    }, 2000)
  }

  let tempConvert = () => {
    let converter = document.querySelector("#converter");
    let tempFormat = document.querySelectorAll(".temp-format");
    let tempArray = document.querySelectorAll(".temp");

    function turnTempToF(temp) {
      let newTemp = (temp * 1.8) + 32;
      return Math.round(newTemp);
    }
    function turnTempToC(temp) {
      let newTemp = (temp - 32) / 1.8
      return Math.round(newTemp);
    }

    if (isCelsius) {
      // Convert temp values
      tempArray.forEach(temp => {
        let newTemp = turnTempToF(temp.innerHTML);
        temp.innerHTML = newTemp;
      });
      // Change the tags
      tempFormat.forEach(el => {
        el.innerHTML = " °F";
      });
      // Change the button text
      converter.innerHTML = "See in °C";
      // Log the change
      setIsCelsius(false);

    } else {
      // Convert temp values
      tempArray.forEach(temp => {
        let newTemp = turnTempToC(temp.innerHTML);
        temp.innerHTML = newTemp;
      });
      // Change the tags
      tempFormat.forEach(el => {
        el.innerHTML = " °C";
      });
      // Change the button text
      converter.innerHTML = "See in °F";
      // Log the change
      setIsCelsius(true);
    }
  }

  if (weatherData.ready) {
    let emoji = IconData.find(x => x.iconCode === weatherData.code).emoji;
    let minTemp = Math.round(weatherData.minTemp);
    let maxTemp = Math.round(weatherData.maxTemp);

    return (
      <section className="section current">
        <div className="current__container">
          <div className="container-1">
            <h1 className="current__title">{weatherData.city}</h1>
            <p className="current__date">{weatherData.date}</p>
            <div className="current__temperature">
              <div className="temp__container" onMouseOver={showTempConverter}>
                <span className="current__emoji">{emoji}</span>
                <span className="temp">{minTemp}</span><span className="temp-format">°C </span> /
                <span className="temp">{maxTemp}</span><span className="temp-format">°C</span>
              </div>
              <div className="temp-converter">
                <button id="converter" onClick={tempConvert}>See in °F</button>
              </div>
            </div>
          </div>
          <div className="container-2">
            <p className="current__info">Wind speed: {weatherData.wind}m/s</p>
            <p className="current__info">Humidity: {weatherData.humidity}%</p>
            <p className="current__info">Description: {weatherData.description}</p>
          </div>
        </div>
      </section>
    )
  } else {
    return (
      <div className="current">
        <p className="current__date">Introduce a city to find out about its weather</p>
      </div>
    )
  }
}

export default Current;