import React from 'react';

const Days = ({ date, status, message }) => {
  return (
    <li className="days__container">
      <p className="days__date">{ date }</p>
      <p className={`days__face ${ status === ':)' ? "days__face-good" : "days__face-bad" }`}>
        { status }
       { message && 
          <span className="days__message" role="img" aria-label="More info" onClick={ () => alert('Estaba feliz este día porque: \n' + message)}>
            ℹ️
          </span> }
      </p>
    </li>
  );
}

export default Days;