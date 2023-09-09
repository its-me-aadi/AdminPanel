import React, { useEffect, useState } from 'react';
import "../styles/driverDetailsCard.css";
import { getDatabase, ref, onValue, update } from "firebase/database";
import { getStorage, ref as sRef, getDownloadURL } from "firebase/storage";

export default function DriverDetailsCard() {

  const [imageUrl, setImageUrl] = useState("https://upload.wikimedia.org/wikipedia/en/4/4c/GokumangaToriyama.png");
  const [aadhar,setAdhar]=useState("https://upload.wikimedia.org/wikipedia/en/4/4c/GokumangaToriyama.png")
  const [driverData, setDriverData] = useState({
    photo: false,
    adharCard: false,
    phoneNumber: false,
    mail: false

  });
  const [verificationData, setVerificationData] = useState({
    phoneNumber: "",
    mail: "",
    profilePhoto:"/",
    aadhar: "/" 
  })
  const [name, setName] = useState("Driver");
  async function photo(no) {
    // const storage = getStorage();
    // console.log(no);
    // var s="driverImages/profilePhoto/"+no;
    // const reference = sRef(storage, s);
    // const url = await getDownloadURL(reference);
    // var s2="driverImages/"+"aadhaarCard/"+no;
    // const reference2 = sRef(storage, s2);
    // const url2 = await getDownloadURL(reference2);
    // setImageUrl(url);
    // setAdhar(url2);
    console.log(imageUrl);
  }
  useEffect(() => {
    const db = getDatabase();
    const drivers = ref(db, 'drivers');
    onValue(drivers, (snapshot) => {
      const data = snapshot.val();
      const index = localStorage.getItem("driverID");
      setDriverData(data[index].verification);
      setName(data[index].name);
      setVerificationData({
        phoneNumber: data[index].contactNumber,
        mail: data[index].mail,
        profilePhoto:"driverImages/"+data[index].contactNumber,
        aadhar: "driverImages/"+data[index].contactNumber 
      })
      photo(data[index].contactNumber);
    });
    console.log(verificationData.phoneNumber);
  }, [])
  function Verify(event) {
    const db = getDatabase();
    const name = event.target.name;
    const index = localStorage.getItem("driverID");
    update(ref(db, 'drivers/' + index + '/verification/'), {
      [name]: true
    });
    setDriverData(prevValue => {
      return {
        ...prevValue,
        [name]: true
      }
    })
    event.preventDefault();
    alert("Success: true");
  }

  return (
    <div className='main-div'>
      <div className='photo-name'>
        <div className='name'>{name}</div>
        <div >
          <img className='photo' src={imageUrl} alt="profile-pic" />
        </div>
      </div>
      <div className='verificationDetails'>
        <div className='details'>
          <div className='content'> Profile:
          <img className='adhar' src={imageUrl} alt="profile-pic" />
          </div>
          {!driverData.photo && <div className='button'><button type='button' className='btn btn-success' name='photo' onClick={Verify}>Verify</button></div>}
        </div>
        <div className='details'>
          <div className='content'> Aadhar:
            <img className='adhar' src={aadhar} alt="aadhar" />
          </div>
          {!driverData.adharCard && <div className='button'><button type='button' className='btn btn-success' name='adharCard' onClick={Verify}>Verify</button></div>}
        </div>
        <div className='details'>
          <div className='content'>Phone Number : {verificationData.phoneNumber}</div>
          {!driverData.phoneNumber && <div className='button'><button type='button' className='btn btn-success' name='phoneNumber' onClick={Verify}>Verify</button></div>}
        </div>
        <div className='details'>
          <div className='content'>Mail : {verificationData.mail}</div>
          {!driverData.mail && <div className='button'><button type='button' className='btn btn-success' name='mail' onClick={Verify}>Verify</button></div>}
        </div>
      </div>
    </div>
  )
}
