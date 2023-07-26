import React, { useEffect,useState } from 'react'
import Sidebar from '../components/sidebar'
import RightSection from "../components/rightSection"
import "../styles/index.css"
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { getDatabase, ref,onValue } from "firebase/database";

export default function Driver(props) {
  const auth = getAuth(props.app);
  const navigate = useNavigate();
  const [Drivers,setDrivers]=useState([]);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        navigate("/login");
      }
      else{
        const db = getDatabase();
        const drivers = ref(db, 'drivers');
        onValue(drivers, (snapshot) => {
          const data = snapshot.val();
          setDrivers(data);
        });
      }
    })
  }, [])
  return (
    <div>
      <Sidebar button="button3"/>
      <RightSection RightSection data={Drivers} heading="Drivers" users={false} driver={true} dashboard={false} newOrders={false} verifyDriver={false} />
    </div>
  )
}
