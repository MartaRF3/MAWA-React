import React, {useState} from 'react';
import axios from 'axios';

import Current from "./Current";
import Forecast from "./Forecast";

let Weather = () => {

  let APIKey = "3f66f71e051bd60b681717e2d589f26b";

  let [inputText, setInputText] = useState("");
  let [city, setCity] = useState("");
  let [weatherData, setWeatherData] = useState({ready: false});
  let [forecastArray, setForecastArray] = useState([]);
  
  let inputTextHandler = (event) => {
    setInputText(event.target.value);
    setCity(event.target.value);
  }

  let submitHandler = (event) => {
    event.preventDefault();
    setInputText("");
    searchInfo();
  }

  let responseHandler = (response) => {
    console.log(response);
    setWeatherData({
      ready: true,
      coord: response.data.coord,
      minTemp: response.data.main.temp_min,
      maxTemp: response.data.main.temp_max,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      code: response.data.weather[0].icon,
      description: response.data.weather[0].description,
      city: city,
      date: new Date(response.data.dt*1000).toLocaleDateString('es-ES', {weekday: 'long', year: 'numeric', month: 'short', day: 'numeric'})
    });
  }

  // save the info in an array of days
  let forecastHandler = (response) => {
    setForecastArray(response.data.daily);
  }

  let searchInfo = () => {
    // Get the current weather info
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}&units=metric`
    axios.get(url)
    .then(responseHandler)
    .catch(error => console.log(error))

    // Get the forecast weather info
    // let lat = weatherData.coord.lat;
    // let lon = weatherData.coord.lon;
    let url2 = `https://api.openweathermap.org/data/2.5/onecall?lat=41.9512&lon=2.3946&exclude=current,minutely,hourly,alerts&appid=${APIKey}&units=metric`
    
    axios.get(url2)
      .then(forecastHandler)
      .catch(error => console.log(error))
  }

  return (
    <main className="main">
      <div className="main__container">
        <section className="section searcher">
          <div className="searcher__container">
            <form action="#">
              <input
                onChange={inputTextHandler}
                className="searcher__input"
                type="text"
                name="city"
                id="city"
                autoFocus="on"
                autoComplete="off"
                placeholder="Write a city here..."
                value={inputText}
              />
              <button 
                  onClick={submitHandler}
                  className="searcher__submit" 
                  type="submit" 
                  id="submit"
                  >🔎</button>
            </form>
            {/* <button class="local-city">Your current location</button> */}
          </div>
        </section>
        <Current weatherData={weatherData} />
        <Forecast forecastArray={forecastArray} />
      </div>
    </main>
  )
}

export default Weather;