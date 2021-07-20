import React from 'react';
import './App.scss';

import Weather from "./components/Weather";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  
  return (
    <div className="wrapper">
      <div className="wrapper__container">
        <Header />
        <Weather />
        <Footer />
      </div>
    </div>
  );
}

export default App;
