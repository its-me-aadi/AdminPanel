import React, { useState } from 'react'
import "../styles/orderList.css"
import DriversTable from './driversTable'
export default function OrderList(props) {
  
const [typeOfDrivers,setTypeDrivers]=useState("");

const clickedButtonStyle = {
  opacity: "0.5",
  backgroundColor: "black",
  color: "whitesmoke",
 
}
const all = {
  color: "black",
  backgroundColor: "skyblue"
}
const online = {
  color: "whitesmoke",
  backgroundColor: "green"
}
const offline = {
  color: "whitesmoke",
  backgroundColor: "#A22C29"
}
const [orderType, setOrderType] = useState({
  all: clickedButtonStyle,
  online:online,
  offline:offline
});
  return (
    <div>
    <div className='orderList'>
        <div >
            <ul className='orderList-options'>
                <li className='orderList-options-option' style={orderType.all} onClick={()=>{setTypeDrivers("");setOrderType({
                   all: clickedButtonStyle,
                   online:online,
                   offline:offline
                })}}>All Drivers</li>
                <li className='orderList-options-option' style={orderType.online} onClick={()=>{setTypeDrivers("online");setOrderType({
                   all: all,
                   online:clickedButtonStyle,
                   offline:offline
                })}}>Online</li>
                <li className='orderList-options-option' style={orderType.offline} onClick={()=>{setTypeDrivers("offline");setOrderType({
                   all: all,
                   online:online,
                   offline:clickedButtonStyle
                })}}>Offline</li>
            </ul>
           
        </div>
    </div>
    <div style={{display:"flex",justifyContent:"center"}}>
    <DriversTable searchValue={props.search} orderType={typeOfDrivers} tableData={props.listData}/>
    </div>
    </div>
  )
}
