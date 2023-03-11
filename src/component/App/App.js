import Widget from '../widget';
import './App.css';
import { useState } from 'react';
import axios from 'axios';

function App() {
  const [city, setCity] = useState('Guichainville');
  const [codePostale, setcodePostale] = useState('54000');
  const [temperature, setTemperature] = useState('');
  const [iconId, setIconId] = useState('');
  const requestAPI = () => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${codePostale},fr&appid=145cdec1b64aaab063c3dc8523f9266a&units=metric`
      )
      .then((response) => {
        console.log(response.data.main.temp);
        console.log(response);
        setTemperature(Math.floor(response.data.main.temp));
        setCity(response.data.name);
        setIconId(response.data.weather[0].icon);
        console.log(iconId);
        return;
      })
      .catch((error) => {
        console.log(error);
        setTemperature('..');
      });
  };
  requestAPI();

  return (
    <Widget
      city={city}
      codePostale={codePostale}
      temperature={temperature}
      iconId={iconId}
    ></Widget>
  );
}

export default App;
