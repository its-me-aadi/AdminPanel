import React, { useEffect, useState } from 'react'
import Sidebar from '../components/sidebar'
import RightSection from '../components/rightSection'
import "../styles/index.css"
import { useNavigate } from 'react-router-dom'
import { getAuth, onAuthStateChanged } from "firebase/auth";

export default function Courier(props) {
  const navigate = useNavigate();
  const auth = getAuth(props.app);
  
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        navigate("/login");
      }
    })
  }, [])
  return (
    <div>
      <Sidebar button="button5"/>
      <RightSection button="button5" courier={true} heading="Courier" users={false} driver={false} dashboard={false} newOrders={false} verifyDriver={false} />
    </div>
  )
}
