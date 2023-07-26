import React, { useState } from 'react'
import Orders from './Orders'
import OrderList from './orderList'
import DirverList from "./driverList"
import UserList from "./userList"
import OrdersTable from './ordersTable'
import Drivers from "../components/drivers"
import DriverDetailsCard from './driverDetailsCard'
import "../styles/orderTable.css"
import "../styles/navbar.css"
import { getAuth} from "firebase/auth";

export default function Navbar(props) {
  const auth = getAuth(props.app);
  const [search, setSearch] = useState("");
  function Search(event) {
    setSearch(event.target.value);
  }

  function Logout(){
    auth.signOut();
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
        <div className='navbar-user'
        style={{color:"red",cursor:"pointer"}} onClick={Logout}>Logout
        </div>
      </div>

      {props.dashboard &&
        <div>
          <Orders/>
          <OrderList search={search} listData={props.data} />
        </div>
      }
      {props.users &&
        <div>
          <Orders/>
          <UserList search={search} listData={props.data} />
        </div>
      }
      {props.driver &&
        <div>
          <Drivers/>
          <DirverList search={search} listData={props.data} />
        </div>
      }
      {props.newOrders &&
        <div>
          <Orders/>
          <OrdersTable searchValue={search} tableData={props.data}  orderType="pending"/>
        </div>}
        {props.verifyDriver &&
        <div>
          <Drivers/>
          <DriverDetailsCard />
        </div>}
    </div>

  )
}
