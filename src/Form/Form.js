import React, {Component} from "react"
import "./Form.css"

class Form extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      date: '',
      time: '',
      guests: null,
    }
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  submitRes = (e) => {
    e.preventDefault()
    const newRes = {
      id: Date.now(),
      ...this.state
    }
    this.props.addRes(newRes)
    this.clearInputs()
  }

  clearInputs = () => {
    this.setState({name: '', date: '', time: '', guests: null})
  }

  render() {
    return (
      <form>
        <input 
          type='text'
          name='name'
          value={this.state.name}
          placeholder='Name'
          onChange={(e) => this.handleChange(e)}
        />
        <input 
          type='text'
          name='date'
          value={this.state.date}
          placeholder='Date (mm/dd)'
          onChange={(e) => this.handleChange(e)}
        />
        <input 
          type='text'
          name='time'
          value={this.state.time}
          placeholder='Time (h:mm)'
          onChange={(e) => this.handleChange(e)}
        />
        <input 
          type='number'
          name='guests'
          min='1'
          value={this.state.guests}
          placeholder='Number of guests'
          onChange={(e) => this.handleChange(e)}
        />
        <button onClick={(e) => this.submitRes(e)}>Make Reservation</button>
      </form>
    )
  }

}

export default Form