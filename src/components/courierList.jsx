import React, { useState } from 'react'
import "../styles/orderList.css"
import CourierTable from "../components/courierTable"
export default function CourierList(props) {
  
const [status,setStatus]=useState("");

const clickedButtonStyle = {
  opacity: "0.5",
  backgroundColor: "black",
  color: "whitesmoke",
 
}
const all = {
  color: "black",
  backgroundColor: "skyblue"
}
const done = {
  color: "whitesmoke",
  backgroundColor: "green"
}
const offline = {
  color: "whitesmoke",
  backgroundColor: "#A22C29"
}
const [orderType, setOrderType] = useState({
  all: clickedButtonStyle,
  done:done,
  pending:offline
});
  return (
    <div>
    <div className='orderList'>
        <div >
            <ul className='orderList-options'>
                <li className='orderList-options-option' style={orderType.all} onClick={()=>{setStatus("");setOrderType({
                   all: clickedButtonStyle,
                   done:done,
                   offline:offline
                })}}>All Request</li>
                <li className='orderList-options-option' style={orderType.done} onClick={()=>{setStatus("done");setOrderType({
                   all: all,
                   done:clickedButtonStyle,
                   offline:offline
                })}}>Completed</li>
                <li className='orderList-options-option' style={orderType.offline} onClick={()=>{setStatus("pending");setOrderType({
                   all: all,
                   done:done,
                   offline:clickedButtonStyle
                })}}>Pending</li>
            </ul>
           
        </div>
    </div>
    <CourierTable searchValue={props.searchValue} status={status}/>
    </div>
  )
}
