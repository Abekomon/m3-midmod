import React from "react";
import "./Reservation.css"

export default function Reservation({ date, name, time, guests}) {
  return (
    <div className='reservation-card'>
      <h3>{name}</h3>
      <p>{date}</p>
      <p>{time} pm</p>
      <p>Number of guests: {guests}</p>
      <button>Cancel</button>
    </div>
  )
}