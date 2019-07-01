import React, { Component } from 'react';
import  { Route, Switch } from 'react-router-dom';
import Calendar from '../components/Calendar/calendar';
import Edit from '../components/Edit/edit';
import './_app.scss';


class App extends Component {
  constructor( props ) {
    super( props )

    this.state = {
      calendarData: [],
      inputDate: null,
      inputStatus: null,
      inputMessage: null,
      today: null
    }
  };

  componentDidMount() {
    this.getTodaysDate();
    if (localStorage.getItem( 'Happiness Calendar' )) {
      this.setState({
        calendarData : JSON.parse(localStorage.getItem( 'Happiness Calendar' )),
      })
    }
  }

  getTodaysDate = () => {
    let today = new Date();
    const dd = today.getDate();
    const mm = today.getMonth()+1;
    const yyyy = today.getFullYear();
    today = `${yyyy}-${mm}-${dd}`;
    this.setState({ today })
  }

  handleChange = event => {
    if ( event.target.id === 'inputDate' && this.checkIfDateIsAlreadyInserted(event.target.value) ) {
      return '';
    } else {
      if ( event.target.id.includes('inputStatus') ) {
	    this.setState({
	        inputStatus: event.target.labels[0].innerHTML
	    })
      } else {
        this.setState({
          [ event.target.id ]: event.target.value
        })
      }
    }
  }

  checkIfDateIsAlreadyInserted = date => {
    for ( const input of this.state.calendarData ) {
      if ( input.date === date ) {
        alert( 'Ya has registrado esa fecha' );
        return true;
      }
    }
  }

  saveNewStatus = () => {
    const { calendarData , inputDate, inputStatus, inputMessage } = this.state;
    this.setState({
      calendarData: [ ...calendarData,
        {
          date: inputDate,
          status: inputStatus,
          message: inputMessage || null
        }
      ]
    })
    this.clearNewData();
  }

  componentDidUpdate( prevProps, prevState ) {
    if ( prevState.calendarData !== this.state.calendarData ) {
      localStorage.setItem( 'Happiness Calendar', JSON.stringify( this.state.calendarData ));
    }
  }

  clearNewData = () => {
    this.setState({
      inputDate: null,
      inputStatus: null,
      inputMessage: null
    })
  }

  render() {
    const { calendarData , ...state } = this.state;

    return (
      <div className="app">
        <Switch>
        <Route exact path='/' render={ () =>
          <Calendar
            calendarData = { calendarData }
          /> }
        />
	      <Route path='/new' render={ () =>
          <Edit
            handleChange = { this.handleChange }
            saveNewStatus = { this.saveNewStatus }
            clearNewData  = { this.clearNewData }
            { ...state }
          /> }
        />
        </Switch>
      </div>
    );
  }
}

export default App;