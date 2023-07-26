import React from 'react'
import OrderCard from './orderCard'
import "../styles/orders.css"
export default function Orders(props) {

    const style1={backgroundColor:"lightblue"};
    const style2={backgroundColor:"lightpink"};
    const style3={backgroundColor:"lightsalmon"}
  return (
    <div className='orders'>
        <OrderCard style={style1} heading="New Orders" number="200"/>
        <OrderCard style={style2} heading="Pending Orders" number="100"/>
        <OrderCard style={style3} heading="Delivered Orders" number="20"/>
    </div>
  )
}
