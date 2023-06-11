import "./style.css";
import React, { useState } from "react";
import sunIcon from "../../assets/sunIcon.svg";
import moonIcon from "../../assets/moonIcon.svg";
import cloudSunIcon from "../../assets/cloudSunIcon.svg";
import cloudMoonIcon from "../../assets/cloudMoonIcon.svg";
import cloudIcon from "../../assets/cloudIcon.svg";
import rainIcon from "../../assets/rainIcon.svg";
import thunderstormIcon from "../../assets/thunderstormIcon.svg";
import snowIcon from "../../assets/snowIcon.svg";
import mistIcon from "../../assets/mistIcon.svg";

function Widget({
  city,
  codePostale,
  temperature,
  minTemperature,
  maxTemperature,
  iconId,
  onUpdate,
}) {
  const [modalOpen, setModalOpen] = useState(false);
  const [newCity, setNewCity] = useState("");
  const [newCodePostale, setNewCodePostale] = useState("");

  const handleUpdate = () => {
    onUpdate(newCity, newCodePostale);
    setModalOpen(false);
  };

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const getWeatherIcon = (iconId) => {
    switch (iconId) {
      case "01d":
        return <img src={sunIcon} alt="Sun Icon" />;
      case "01n":
        return <img src={moonIcon} alt="Moon Icon" />;
      case "02d":
        return <img src={cloudSunIcon} alt="Cloud Sun Icon" />;
      case "02n":
        return <img src={cloudMoonIcon} alt="Cloud Moon Icon" />;
      case "03d":
      case "03n":
      case "04d":
      case "04n":
        return <img src={cloudIcon} alt="Cloud Icon" />;
      case "09d":
      case "09n":
      case "10d":
      case "10n":
        return <img src={rainIcon} alt="Rain Icon" />;
      case "11d":
      case "11n":
        return <img src={thunderstormIcon} alt="Thunderstorm Icon" />;
      case "13d":
      case "13n":
        return <img src={snowIcon} alt="Snow Icon" />;
      case "50d":
      case "50n":
        return <img src={mistIcon} alt="Mist Icon" />;
      default:
        return null;
    }
  };

  return (
    <article className="container">
      <div className="city-container">
        <h1 className="city">{city}</h1>
        {iconId && getWeatherIcon(iconId)}
      </div>
      <div className="temperature-container">
        <span className="temperature">{temperature}&deg;</span>
      </div>
      <div className="container-temperature-range">
        <div className="temperature-range">
          <span className="min-temperature">{minTemperature}&deg;</span>
          <span className="max-temperature">{maxTemperature}&deg;</span>
        </div>
        <button className="update-button" onClick={openModal}>
          <span className="material-symbols-outlined">edit_location</span>
        </button>
      </div>

      {modalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h3>Modifier la ville</h3>
            <input
              type="text"
              placeholder="Nouvelle ville"
              value={newCity}
              onChange={(e) => setNewCity(e.target.value)}
            />
            <input
              type="text"
              placeholder="Nouveau code postal"
              value={newCodePostale}
              onChange={(e) => setNewCodePostale(e.target.value)}
            />
            <button onClick={handleUpdate}>Mettre à jour</button>
            <button onClick={closeModal}>Annuler</button>
          </div>
        </div>
      )}
    </article>
  );
}

export default Widget;
