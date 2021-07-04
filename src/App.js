import React, { useState } from 'react';
import './App.scss';

import Current from "./components/current/Current";

function App() {

  let [inputText, setInputText] = useState("");
  let [newCity, setNewCity] = useState("");
  
  let inputTextHandler = (event) => {
    setInputText(event.target.value);
  }

  let submitHandler = (event) => {
    event.preventDefault();
    setNewCity(inputText);
  }
  return (
    <div className="wrapper">
    <div className="container">
      <div className="left-container">
        <form className="searcher" action="#" onSubmit={submitHandler}>
          <input
            onChange={inputTextHandler}
            className="searcher__input"
            type="text"
            name="city"
            id="city"
            autoFocus="on"
            autoComplete="off"
            placeholder="Write a city here..."
          />
          <button className="searcher__submit" type="submit" id="submit">🔎</button>
        </form>
        {/* <button class="local-city">Your current location</button> */}
      </div>
      <Current cityName={newCity} />
    </div>
  </div>
  );
}

export default App;
