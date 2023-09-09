import React, { useEffect ,useState} from 'react'
import Sidebar from '../components/sidebar'
import RightSection from '../components/rightSection'
import "../styles/index.css"
import { useNavigate } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getDatabase, ref,onValue } from "firebase/database";

export default function NewOrder(props) {
  const auth = getAuth(props.app);
  const navigate = useNavigate();
  const [Data,setData]=useState([]);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        navigate("/login");
      }
      else {
        const db = getDatabase();
        const data = ref(db, 'userRequest');
        onValue(data, (snapshot) => {
          const data1 = snapshot.val();
          setData(data1);
        });
      }
    })
  }, [])
  return (
    <div>
      <Sidebar button="button4"/>
      <RightSection button="button4" data={Data} heading="New Orders" users={false} driver={false} dashboard={false} newOrders={true} verifyDriver={false} />
    </div>
  )
}
