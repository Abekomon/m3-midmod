import React from "react";
import "./Reservation.css"

export default function Reservation(props) {
  return (
    <div className='reservation-card'>
      <h3>Name</h3>
      <p>Date</p>
      <p>Time</p>
      <p>Number of guests</p>
      <button>Cancel</button>
    </div>
  )
}