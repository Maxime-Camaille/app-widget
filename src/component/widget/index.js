import React, { useState, useRef, useEffect } from "react";
import sunIcon from "../../assets/sunIcon.svg";
import moonIcon from "../../assets/moonIcon.svg";
import cloudSunIcon from "../../assets/cloudSunIcon.svg";
import cloudMoonIcon from "../../assets/cloudMoonIcon.svg";
import cloudIcon from "../../assets/cloudIcon.svg";
import rainIcon from "../../assets/rainIcon.svg";
import thunderstormIcon from "../../assets/thunderstormIcon.svg";
import snowIcon from "../../assets/snowIcon.svg";
import mistIcon from "../../assets/mistIcon.svg";
import "./style.css";

function Widget({
  city,
  codePostale,
  temperature,
  minTemperature,
  maxTemperature,
  iconId,
  onUpdate,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [newCity, setNewCity] = useState("");
  const [newCodePostale, setNewCodePostale] = useState("");
  const cityInputRef = useRef(null);
  const [isBlueTheme, setIsBlueTheme] = useState(false);
  const [isOrangeTheme, setIsOrangeTheme] = useState(false);

  useEffect(() => {
    if (isEditing) {
      cityInputRef.current.focus();
    }
  }, [isEditing]);

  const handleUpdate = () => {
    onUpdate(newCity, newCodePostale);
    setIsEditing(false);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setNewCity("");
    setNewCodePostale("");
  };

  const changeToBlueTheme = () => {
    setIsBlueTheme(true);
    setIsOrangeTheme(false);
  };

  const changeToOrangeTheme = () => {
    setIsBlueTheme(false);
    setIsOrangeTheme(true);
  };

  const getWeatherIcon = (iconId) => {
    switch (iconId) {
      case "01d":
        return <img className='weather-icon' src={sunIcon} alt='Sun Icon' />;
      case "01n":
        return <img className='weather-icon' src={moonIcon} alt='Moon Icon' />;
      case "02d":
        return (
          <img
            className='weather-icon'
            src={cloudSunIcon}
            alt='Cloud Sun Icon'
          />
        );
      case "02n":
        return (
          <img
            className='weather-icon'
            src={cloudMoonIcon}
            alt='Cloud Moon Icon'
          />
        );
      case "03d":
      case "03n":
      case "04d":
      case "04n":
        return (
          <img className='weather-icon' src={cloudIcon} alt='Cloud Icon' />
        );
      case "09d":
      case "09n":
      case "10d":
      case "10n":
        return <img className='weather-icon' src={rainIcon} alt='Rain Icon' />;
      case "11d":
      case "11n":
        return (
          <img
            className='weather-icon'
            src={thunderstormIcon}
            alt='Thunderstorm Icon'
          />
        );
      case "13d":
      case "13n":
        return <img className='weather-icon' src={snowIcon} alt='Snow Icon' />;
      case "50d":
      case "50n":
        return <img className='weather-icon' src={mistIcon} alt='Mist Icon' />;
      default:
        return null;
    }
  };

  return (
    <>
     <button
        className="theme-button blue-theme"
        onClick={changeToBlueTheme}
      >
        <span className="material-symbols-outlined" >wb_sunny</span>
      </button>
      <button
        className="theme-button orange-theme"
        onClick={changeToOrangeTheme}
      >
        <span className="material-symbols-outlined">wb_sunny</span>
      </button>

      <article
        className={`container ${isBlueTheme ? "blue-theme" : ""} ${
          isOrangeTheme ? "orange-theme" : ""
        }`}
      >
        <div className='city-container'>
          {isEditing ? (
            <input
              type='text'
              className='edit-city'
              placeholder='Nouvelle ville'
              ref={cityInputRef}
              autoFocus
              value={newCity}
              onChange={(e) => setNewCity(e.target.value)}
            />
          ) : (
            <>
              <h1 className='city' onClick={handleEdit}>
                {city}
              </h1>
              {iconId && getWeatherIcon(iconId)}
            </>
          )}
        </div>
        <div className='temperature-container'>
          <span className='temperature'>{temperature}&deg;</span>
        </div>
        <div className='container-temperature-range'>
          <div className='temperature-range'>
            <span className='min-temperature'>{minTemperature}&deg;</span>
            <span className='max-temperature'>{maxTemperature}&deg;</span>
          </div>
          {isEditing ? (
            <button className='update-button' onClick={handleUpdate}>
              <span className='material-symbols-outlined'>check_circle</span>
            </button>
          ) : (
            <button className='update-button' onClick={handleEdit}>
              <span className='material-symbols-outlined'>edit_location</span>
            </button>
          )}
        </div>
        {isEditing && (
          <div className='cancel-button-container'>
            <button className='cancel-button' onClick={handleCancel}>
              Annuler
            </button>
          </div>
        )}
      </article>
    </>
  );
}

export default Widget;
