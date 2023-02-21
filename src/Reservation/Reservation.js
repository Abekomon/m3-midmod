import React from "react";
import "./Reservation.css"

export default function Reservation({ id, date, name, time, guests, remRes}) {
  return (
    <div className='reservation-card'>
      <h3>{name}</h3>
      <p>{date}</p>
      <p>{time} pm</p>
      <p>Number of guests: {guests}</p>
      <button onClick={() => remRes(id)}>Cancel</button>
    </div>
  )
}