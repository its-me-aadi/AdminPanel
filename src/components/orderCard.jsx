import React from 'react'
import "../styles/orderCard.css"
export default function orderCard(props) {
  return (
    <div className='orderCard' style={props.style}>
        <div className='orderCard-heading'>
            {props.heading}
        </div>
        <div className='orderCard-details'>
            {props.number}
        </div>
    </div>
  )
}
