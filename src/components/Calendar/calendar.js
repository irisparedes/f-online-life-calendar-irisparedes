import React from 'react';
import Days from '../Days/days';
import { Link } from 'react-router-dom';

const Calendar = ({ calendarData }) => {
  return (
    <section className="section__calendar">
      <div className="calendar__add--container">
        <Link to='/new' className="noStyle">
          <p className={`calendar__add--button ${!calendarData.length && "no-content"} `}>
            +
          </p>
        </Link>
      </div>
        <ul className="calendar__days--container">
          { calendarData.map( (object, index) =>
              <Days
                date = { object.date }
                status = { object.status }
                message = { object.message }
				key = { index }
              />
          )}
        </ul>
      { !calendarData.length && <p className="msg__noRecords">No tienes registros</p> }
    </section>
  );
}

export default Calendar;