import React, { useEffect, useState } from 'react'
import OrderCard from './orderCard'
import "../styles/orders.css"
import { getDatabase, ref, onValue} from "firebase/database";
export default function Orders() {

  const [newOrders,setNewOrders]=useState(0);
  const [pending,setPendingOrders]=useState(0);
  const [delievered,setDelivered]=useState(0);
useEffect(()=>{
  const db = getDatabase();
  const newOrd = ref(db, 'courierRequests');
  onValue(newOrd, (snapshot) => {
    const data1 = snapshot.val();
    setNewOrders(data1.length);
  });
  const pendOrders=ref(db,'driverRequests');
  onValue(pendOrders, (snapshot) => {
    const pendData = snapshot.val();
    if(pendData.length){
      setPendingOrders(pendData.length);
    }
    // else{
    //   setPendingOrders(0);
    // }
  });
  const delOrd = ref(db, 'orders');
  onValue(delOrd, (snapshot) => {
    const data = snapshot.val();
    var x=0;
    data.map(d=>{
      if(d.OrderStatus.toLowerCase()==="delivered"){
        ++x;
      }
    })
    setDelivered(x);
  })
},[])
    const style1={backgroundColor:"lightblue"};
    const style2={backgroundColor:"lightpink"};
    const style3={backgroundColor:"lightsalmon"}
  return (
    <div className='orders'>
        <OrderCard style={style1} heading="New Orders" number={newOrders}/>
        <OrderCard style={style2} heading="Pending Orders" number={pending}/>
        <OrderCard style={style3} heading="Delivered Orders" number={delievered}/>
    </div>
  )
}
