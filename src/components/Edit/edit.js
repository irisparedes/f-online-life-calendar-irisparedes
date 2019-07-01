import React from 'react';
import { Link } from 'react-router-dom';

const Edit = ({
  inputDate,
  inputStatus,
  inputMessage,
  handleChange,
  saveNewStatus,
  clearNewData,
  today }) => {

  return (
    <section className="section__editor">
      <div className="editor__innerContainer">
        <label className="editor__label" htmlFor="inputDate">
          Fecha:
        </label>
        <input className="input-date" type="date" id="inputDate" min="1900-01-01" max={ today } onChange={ handleChange } />
      </div>
      <div className="editor__innerContainer">
        <p className="editor__label">
          Estado:
        </p>
        <input className="input-radio" type="radio" name="input-radio" id="inputStatusGood" onChange={ handleChange } />
        <label className="input-radio-text" htmlFor="inputStatusGood">:)</label>
        <input className="input-radio" type="radio" name="input-radio" id="inputStatusBad" onChange={ handleChange } />
        <label className="input-radio-text" htmlFor="inputStatusBad">:(</label>
      </div>
      { inputStatus === ':)' &&
        <div className="editor__innerContainer">
          <p className="editor__label">
            Mensaje:
          </p>
          <textarea className="input-message" id="inputMessage" rows="4" onChange={ handleChange } ></textarea>
          <label className={`input-message-label ${ inputMessage ? 'message-filled' : null }`} htmlFor="inputMessage">
            ¿Por qué es un buen día?
          </label>
        </div>
      }
      <div className="editor__innerContainer">
      { !inputDate || !inputStatus ?
            <button className="editor__button editor__button-save-off" onClick={ () => alert( 'Necesitas escoger una fecha y estado válidos' )} >Guardar</button>
      :
          <Link to='/' className="noStyle">
            <button className="editor__button editor__button-save" onClick={ saveNewStatus } >Guardar</button>
          </Link>
      }

        <Link to='/' className="noStyle">
          <button className="editor__button editor__button-cancel"  onClick={ clearNewData }>Cancelar</button>
        </Link>
      </div>
    </section>
  );
}

export default Edit;