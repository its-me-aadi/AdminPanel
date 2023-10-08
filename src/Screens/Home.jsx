import React, { useEffect, useState } from 'react'
import Sidebar from '../components/sidebar'
import RightSection from '../components/rightSection'
import "../styles/index.css"
import { useNavigate } from 'react-router-dom'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getDatabase, ref,onValue } from "firebase/database";

export default function Home(props) {
  const navigate = useNavigate();
  const auth = getAuth(props.app);
  const [data,setData]=useState([]);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        navigate("/login");
      }
      else {
        const db = getDatabase();
        const orderData = ref(db, 'orders');
        onValue( orderData , (snapshot) => {
          const data1 = snapshot.val();
          setData(data1);
        });
      }
    })
  }, [])
  const Orders = {
    "New Orders": 200,
    "Pending Orders": 100,
    "Delievered Orders": 20
  }

  return (
    <div>
      <Sidebar button="button1"/>
      <RightSection button="button1" data={data} heading="Dashboard" users={false} driver={false} dashboard={true} newOrders={false} cardData={Orders} verifyDriver={false} coupons={false}/>
    </div>
  )
}
