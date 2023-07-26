import React, { useEffect,useState } from 'react'
import Sidebar from '../components/sidebar'
import RightSection from "../components/rightSection"
import "../styles/index.css"
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from 'react-router-dom';


export default function VerifyDriver(props) {
  const auth = getAuth(props.app);
  const navigate = useNavigate();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        navigate("/login");
      }
    })
  }, [])
  return (
    <div>
      <Sidebar />
      <RightSection RightSection heading="Verify Driver" users={false} driver={false} dashboard={false} newOrders={false} verifyDriver={true} />
    </div>
  )
}
