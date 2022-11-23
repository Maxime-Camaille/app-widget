import './style.css';

function Widget({ city, codePostale, temperature }) {
  return (
    <article className='container'>
      <div className='weather-icon'>
        <img
          className='logo'
          src='https://cdn-icons-png.flaticon.com/512/1213/1213595.png'
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
