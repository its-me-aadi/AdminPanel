import React from 'react'
import "../styles/sidebar.css"
import { Link} from 'react-router-dom'
import Logo from "../styles/images/logo.png"
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
    [props.button]:clickedButtonStyle
  }

  return (
    <div className='sidebar'>
        <div className='sidebar-heading'>
            MovEasy
            <img src={Logo} className="sidebar-heading-logo" alt='logo'/>
        </div>
        <hr className='sidebar-hr'/>
        <div>
            <ul className='sidebar-ul'>
                <Link to="/" className='sidebar-listitems' style={clickedButton.button1}><li  name="button1">Dashboard</li></Link>
                <Link to="/users" className='sidebar-listitems' style={clickedButton.button2}><li name="button2">Users</li></Link>
                <Link to="/drivers" className='sidebar-listitems' style={clickedButton.button3}><li name="button3">Drivers</li></Link>
                <Link to="/new-orders" className='sidebar-listitems' style={clickedButton.button4}><li name="button4">New Orders</li></Link>
  
            </ul>
        </div>
    </div>
  )
}
