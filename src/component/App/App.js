import React, { useState, useEffect } from 'react';
import Widget from '../widget';
import './App.css';
import axios from 'axios';

function App() {
  const [city, setCity] = useState('Guichainville');
  const [codePostale, setCodePostale] = useState('27930');
  const [temperature, setTemperature] = useState('');
  const [minTemperature, setMinTemperature] = useState('');
  const [maxTemperature, setMaxTemperature] = useState('');
  const [iconId, setIconId] = useState('');

  useEffect(() => {
    const requestAPI = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city},${codePostale},fr&appid=145cdec1b64aaab063c3dc8523f9266a&units=metric`
        );
        console.log(response);
        setTemperature(Math.floor(response.data.main.temp));
        setMinTemperature(Math.floor(response.data.main.temp_min));
        setMaxTemperature(Math.floor(response.data.main.temp_max));
        setCity(response.data.name);
        setIconId(response.data.weather[0].icon);
      } catch (error) {
        console.log(error);
        setTemperature('..');
      }
    };

    requestAPI();
  }, [city, codePostale]);

  const handleUpdateWidget = (newCity, newCodePostale) => {
    setCity(newCity);
    setCodePostale(newCodePostale);
  };

  return (
    <Widget
      city={city}
      codePostale={codePostale}
      temperature={temperature}
      minTemperature={minTemperature}
      maxTemperature={maxTemperature}
      iconId={iconId}
      onUpdate={handleUpdateWidget}
    />
  );
}

export default App;