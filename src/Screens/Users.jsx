import React, { useEffect, useState } from 'react'
import Sidebar from '../components/sidebar'
import RightSection from "../components/rightSection"
import "../styles/index.css"
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { getDatabase, ref,onValue } from "firebase/database";

export default function User(props) {
  const auth = getAuth(props.app);
  const navigate = useNavigate();
  const [Users,setUsers]=useState([]);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        navigate("/login");
      }
      else{
        const db = getDatabase();
        const users = ref(db, 'users');
        onValue(users, (snapshot) => {
          const data = snapshot.val();
          setUsers(data);
        });
      }
    })
  }, [])
  return (
    <div>
      <Sidebar button="button2"/>
      <RightSection data={Users} heading="Users" users={true} driver={false} dashboard={false} newOrders={false} verifyDriver={false} />
    </div>
  )
}
