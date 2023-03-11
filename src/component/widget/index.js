import './style.css';

function Widget({ city, codePostale, temperature, iconId }) {
  return (
    <article className='container'>
      <div className='weather-icon'>
        <img
          className='logo'
          src={`http://openweathermap.org/img/wn/${iconId}@2x.png`}
          alt='logo'
        ></img>
      </div>
      <h1>{city}</h1>
      <h2>{codePostale}</h2>
      <span className='temperature'>{temperature}&deg;</span>
    </article>
  );
}

export default Widget;
