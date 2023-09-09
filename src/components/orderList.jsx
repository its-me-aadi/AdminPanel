import React, { useState } from 'react'
import "../styles/orderList.css"
import OrdersTable from './ordersTable'
export default function OrderList(props) {

  const clickedButtonStyle = {
    opacity: "0.7",
    backgroundColor: "black",
    color: "whitesmoke"
  }
  const all = {
    color: "black",
  backgroundColor: "skyblue"
  }
  const pending = {
    color: "black",
    backgroundColor: "#E1C89E"
  }
  const delievered = {
    color: "whitesmoke",
    backgroundColor: "green"
  }
  const booked = {
    color: "black",
    backgroundColor: "lightgreen"
  }
  const canceled = {
    color: "whitesmoke",
    backgroundColor: "#A22C29"
  }
  const [typeOfOrders, setTypeOdorders] = useState("");
  const [orderType, setOrderType] = useState({
    all: clickedButtonStyle,
    pending: pending,
    delievered: delievered,
    booked: booked,
    canceled: canceled
  });

  return (
    <div>
      <div className='orderList'>
        <div >
          <ul className='orderList-options'>
            <li className='orderList-options-option' onClick={() => {
              setTypeOdorders(""); setOrderType({
                all: clickedButtonStyle,
                pending: pending,
                delievered: delievered,
                booked: booked,
                canceled: canceled
              })
            }} name="all" style={orderType.all}>All Orders</li>
            <li className='orderList-options-option' onClick={() => {
              setTypeOdorders("pending"); setOrderType({
                all: all,
                pending: clickedButtonStyle,
                delievered: delievered,
                booked: booked,
                canceled: canceled
              })
            }} name="pending" style={orderType.pending}>Pending Orders</li>
            <li className='orderList-options-option' onClick={() => {
              setTypeOdorders("delivered"); setOrderType({
                all: all,
                pending: pending,
                delievered: clickedButtonStyle,
                booked: booked,
                canceled: canceled
              })
            }} name="delievered" style={orderType.delievered}>Delivered Orders</li>
            <li className='orderList-options-option' onClick={() => {
              setTypeOdorders("booked");
              setOrderType({
                all: all,
                pending: pending,
                delievered: delievered,
                booked: clickedButtonStyle,
                canceled: canceled
              })
            }} name="booked" style={orderType.booked}>Booked</li>
            <li className='orderList-options-option' onClick={() => {
              setTypeOdorders("cancelled");
              setOrderType({
                all: all,
                pending: pending,
                delievered: delievered,
                booked: booked,
                canceled: clickedButtonStyle
              })
            }} name="canceled" style={orderType.canceled}>Cancelled Orders</li>
          </ul>
        </div>
      </div>
      <OrdersTable searchValue={props.search} orderType={typeOfOrders} tableData={props.listData} />
    </div>
  )
}
