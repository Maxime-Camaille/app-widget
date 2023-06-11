import './style.css';
import React, { useState } from 'react';

function Modal({ onModalClose, onModalSubmit }) {
  const [newCity, setNewCity] = useState('');
  const [newCodePostal, setNewCodePostal] = useState('');

  const handleCityChange = (event) => {
    setNewCity(event.target.value);
  };

  const handleCodePostalChange = (event) => {
    setNewCodePostal(event.target.value);
  };

  const handleSubmit = () => {
    onModalSubmit(newCity, newCodePostal);
    onModalClose();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Modifier la ville et le code postal</h2>
        <input
          type="text"
          placeholder="Nouvelle ville"
          value={newCity}
          onChange={handleCityChange}
        />
        <input
          type="text"
          placeholder="Nouveau code postal"
          value={newCodePostal}
          onChange={handleCodePostalChange}
        />
        <button onClick={handleSubmit}>Mettre à jour</button>
        <button onClick={onModalClose}>Annuler</button>
      </div>
    </div>
  );
}

export default Modal;


