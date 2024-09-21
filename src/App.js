import React from 'react';
import { useState } from 'react';

const API__KEY = '2347e89cf951bc1ea82635251fee84eb'

function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState({});

  const onClickSearchWeather = async(event) => {
    event.preventDefault();
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?id=${city}&appid=${API__KEY}`,);
    const data = await response.json();
    setWeather(data);
  };

  return (
    <div className="App">
      return (
        <div>
          <h1>Wether</h1>
          <form className="weather__form">
            <input className="weather__input" type="text" placeholder="Your city" onChange={(event) => setCity(event.target.value)} />
            <button className="weather__button" type="submit" onClick={onClickSearchWeather}>let's go</button>
          </form>
          {weather.name !== undefined ? (
            <>
              <h2 className="weather__city">{weather.name}</h2>
              <p className="weather__temp">{Math.round(weather.main.temp - 273)}°C</p>
              <p className="weather__info">{weather.weather[0].main}</p>
            </>
          ) : null}
          
        </div>
      )
    </div>
  );
}
  


export default App;
