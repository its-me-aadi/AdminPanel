import React from 'react'
import "../styles/sidebar.css"
import { Link} from 'react-router-dom'
export default function Sidebar(props) {
  const clickedButtonStyle={
    opacaity:"0.1",
    color:"black",
    backgroundColor:"wheat",
    fontWeight:"600"
  }

  const clickedButton={
    button1:{},
    button2:{},
    button3:{},
    button4:{},
    button5:{},
    button6:{},
    [props.button]:clickedButtonStyle
  }

  return (
    <div className='sidebar'>
        <div className='sidebar-heading'>
           Admin Panel
        </div>
        <hr className='sidebar-hr'/>
        <div>
            <ul className='sidebar-ul'>
                <Link to="/" className='sidebar-listitems' style={clickedButton.button1}><li >Dashboard</li></Link>
                <Link to="/users" className='sidebar-listitems' style={clickedButton.button2}><li>Users</li></Link>
                <Link to="/drivers" className='sidebar-listitems' style={clickedButton.button3}><li >Drivers</li></Link>
                <Link to="/new-orders" className='sidebar-listitems' style={clickedButton.button4}><li>New Orders</li></Link>
                <Link to="/courier-req" className='sidebar-listitems' style={clickedButton.button5}><li>Courier</li></Link>
                <Link to="/coupons" className='sidebar-listitems' style={clickedButton.button6}><li>Coupons</li></Link>
            </ul>
        </div>
    </div>
  )
}
