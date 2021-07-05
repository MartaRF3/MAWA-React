import React, { useState } from 'react';
import './App.scss';

import Current from "./components/Current";
import Searcher from "./components/Searcher";

function App() {

  let [inputText, setInputText] = useState("");
  let [newCity, setNewCity] = useState("");
  
  return (
    <div className="wrapper">
    <div className="container">
      <Searcher inputText={inputText} setInputText={setInputText} setNewCity={setNewCity} />
      <Current cityName={newCity} />
    </div>
  </div>
  );
}

export default App;
