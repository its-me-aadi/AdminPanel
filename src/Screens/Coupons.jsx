import React, { useEffect,useState } from 'react'
import Sidebar from '../components/sidebar'
import RightSection from "../components/rightSection"
import "../styles/index.css"
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { getDatabase, ref,onValue } from "firebase/database";

export default function Coupons(props) {
  const auth = getAuth(props.app);
  const navigate = useNavigate();
  const [Coopons,setCoopons]=useState([]);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        navigate("/login");
      }
      else{
        const db = getDatabase();
        const coupons  = ref(db, 'coupons');
        onValue(coupons, (snapshot) => {
          const data = snapshot.val();
          setCoopons(data);
        });
      }
    })
  }, [])
  return (
    <div>
      <Sidebar button="button6"/>
      <RightSection button="button6" data={Coopons} heading="Coupons" users={false} driver={false} dashboard={false} newOrders={false} verifyDriver={false} coupons={true}/>
    </div>
  )
}
