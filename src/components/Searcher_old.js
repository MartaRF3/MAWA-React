import React from 'react';

let Searcher = ( {inputText, setInputText, setCity} ) => {

  let inputTextHandler = (event) => {
    setInputText(event.target.value);
  }

  let submitHandler = (event) => {
    event.preventDefault();
    setCity(inputText);
    setInputText("");
  }

  return (
    <div className="left-container">
      <form className="searcher" action="#">
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
  )
}

export default Searcher;