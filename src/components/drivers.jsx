import React from 'react'
import OrderCard from './orderCard'
import "../styles/orders.css"
export default function Drivers() {

    const style1={backgroundColor:"lightblue"};
    const style2={backgroundColor:"lightpink"};
    const style3={backgroundColor:"lightsalmon"}
  return (
    <div className='orders'>
        <OrderCard style={style1} heading="New Drivers" number="200"/>
        <OrderCard style={style2} heading="Online Drivers" number="300"/>
        <OrderCard style={style3} heading="Offline Drivers" number="20"/>
    </div>
  )
}
