import React, { useState } from 'react'
import Orders from './Orders'
import OrderList from './orderList'
import DirverList from "./driverList"
import UserList from "./userList"
import OrdersTable from './ordersTable'
import Drivers from "../components/drivers"
import DriverDetailsCard from './driverDetailsCard'
import Coupons from './coupons'
import "../styles/orderTable.css"
import "../styles/navbar.css"
import { getAuth } from "firebase/auth";
import CourierList from "../components/courierList";
import { Link } from 'react-router-dom'

export default function Navbar(props) {
  const auth = getAuth(props.app);
  const [search, setSearch] = useState("");
  function Search(event) {
    setSearch(event.target.value);
  }

  function Logout() {
    auth.signOut();
  }
  const clickedButtonStyle = {
    // opacaity:"0.1",
    color: "wheat",
    fontWeight: "600"
  }

  const clickedButton = {
    button1: {},
    button2: {},
    button3: {},
    button4: {},
    button5: {},
    button6: {},
    [props.button]: clickedButtonStyle
  }

  return (
    <div>
      <div className='navbar'>
        <div className='navbar-heading'>
          {props.heading}
        </div>
        <div className='navbar-search'>
          <input type='text' placeholder='Search' name='search' className='navbar-search-input' value={search} onChange={Search} />
        </div>
        <div className='navbar-logout'
          onClick={Logout}>Logout
        </div>
        <div className='navbar-links'>
          <Link to="/" className='navbar-link' style={clickedButton.button1}><p>Dashboard</p></Link>
          <Link to="/users" className='navbar-link' style={clickedButton.button2}><p>Users</p></Link>
          <Link to="/drivers" className='navbar-link' style={clickedButton.button3}><p>Drivers</p></Link>
          <Link to="/new-orders" className='navbar-link' style={clickedButton.button4}><p>New Orders</p></Link>
          <Link to="/courier-req" className='navbar-link' style={clickedButton.button5}><p>Courier Requests</p></Link>
        </div>
      </div>

      {props.dashboard &&
        <div>
          <Orders />
          <OrderList search={search} listData={props.data} />
        </div>
      }
      {props.users &&
        <div>
          <Orders />
          <UserList search={search} listData={props.data} />
        </div>
      }
      {props.driver &&
        <div>
          <Drivers />
          <DirverList search={search} listData={props.data} />
        </div>
      }
      {props.newOrders &&
        <div>
          <Orders />
          <OrdersTable searchValue={search} tableData={props.data} orderType="pending" />
        </div>}
      {props.verifyDriver &&
        <div>
          <Drivers />
          <DriverDetailsCard />
        </div>}
      {
        props.courier &&
        <div>
          <Drivers />
          <CourierList searchValue={search} />
        </div>
      }
      {
        props.coupons &&
        <div>
          <Coupons data={props.data}/>
        </div>
      }
    </div>

  )
}
