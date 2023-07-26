import React, { useEffect, useState } from 'react';
import "../styles/driverDetailsCard.css";
import { getDatabase, ref, onValue ,update} from "firebase/database";
export default function DriverDetailsCard() {


const [driverData,setDriverData]=useState({
    photo:false,
    adharCard:false,
    phoneNumber:false,
    mail:false

});
const [name,setName]=useState("Driver");
useEffect(()=>{
        const db = getDatabase();
        const drivers = ref(db, 'drivers');
        onValue(drivers, (snapshot) => {
        const data = snapshot.val();
        const index=localStorage.getItem("driverID");
        setDriverData(data[index].verification);
        setName(data[index].name);
        });
},[])
function Verify(event){
  const db = getDatabase();
  const name=event.target.name;
  const index=localStorage.getItem("driverID");
  update(ref(db, 'drivers/'+index+'/verification/'), {
    [name]:true
  });
  setDriverData(prevValue=>{
    return {
      ...prevValue,
      [name]:true
    }
  })
  event.preventDefault();
  alert("Success: true");
}

  return (
    <div className='main-div'>
      <div className='photo-name'>
        <div className='photo'>{name}</div>
        <div className='name'>Photo</div>
      </div>
      <div className='verificationDetails'>
        <div className='details'>
          <div className='content'>Photo</div>
          {!driverData.photo && <div className='button'><button type='button' className='btn btn-success' name='photo' onClick={Verify}>Verify</button></div>}
        </div>
        <div className='details'>
          <div className='content'>Aadhar Card</div>
          {!driverData.adharCard && <div className='button'><button type='button' className='btn btn-success' name='adharCard' onClick={Verify}>Verify</button></div> }
        </div>
        <div className='details'>
          <div className='content'>Phone No</div>
          {!driverData.phoneNumber  && <div className='button'><button type='button' className='btn btn-success' name='phoneNumber' onClick={Verify}>Verify</button></div>}
        </div>
        <div className='details'>
          <div className='content'>Mail</div>
          {!driverData.mail && <div className='button'><button type='button' className='btn btn-success' name='mail' onClick={Verify}>Verify</button></div>}
        </div>
      </div>
    </div>
  )
}
