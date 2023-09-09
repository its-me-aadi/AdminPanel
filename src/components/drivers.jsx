import React, { useState,useEffect } from 'react'
import OrderCard from './orderCard'
import "../styles/orders.css"
import { getDatabase, ref, onValue} from "firebase/database";
export default function Drivers() {

  const [online,setOnline]=useState(0);
  const [offline,setOffline]=useState(0);
  useEffect(()=>{
    const db = getDatabase();
    const drivers = ref(db, 'drivers');
    onValue(drivers, (snapshot) => {
      const data = snapshot.val();
      var onl=0,offl=0;
      data.map((d)=>{
        return (d.status==="offline")?(++offl):(++onl)
          // if(d.status==="offline"){
          //   ++offl;
          // }
          // else{
          //   ++onl;
          // }
      })
      setOffline(offl);
      setOnline(onl);
    })
  },[])
    const style1={backgroundColor:"lightblue"};
    const style2={backgroundColor:"lightpink"};
    const style3={backgroundColor:"lightsalmon"}
  return (
    <div className='orders'>
        <OrderCard style={style1} heading="Total Drivers" number={offline+online}/>
        <OrderCard style={style2} heading="Online Drivers" number={online}/>
        <OrderCard style={style3} heading="Offline Drivers" number={offline}/>
    </div>
  )
}
