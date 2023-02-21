import React, { Component } from 'react';
import './App.css';
import Form from '../Form/Form';
import Reservation from '../Reservation/Reservation';
import accessReservationData from '../apiCalls';

class App extends Component {
  constructor() {
    super()
    this.state = {
      resData: [],
      isLoading: true
    }
  }

  componentDidMount() {
    accessReservationData("reservations").then(data => {
      this.setState({ resData: data, isLoading: false })
    })
  }
  
  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        {/* <div className='resy-form'></div> */}
        {
          this.state.isLoading ? <h2>Loading...</h2> :
          !this.state.resData.length ? <h2>No current reservations</h2> :
          <div className='resy-container'>
            {this.state.resData.map(res => 
              <Reservation 
                key={res.id}
                id={res.id}
                date={res.date}
                name={res.name}
                time={res.time}
                guests={res.number}
              />
            )}
          </div> 
        }
      </div>
    )
  }
}

export default App;
