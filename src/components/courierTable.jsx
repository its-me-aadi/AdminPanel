import React, { useEffect ,useState} from 'react'
import "../styles/orderTable.css"
import { getDatabase, ref,update ,onValue} from "firebase/database";
export default function OrdersTable(props) {

    const [courierD,setCourier]=useState([]);
    useEffect(()=>{
        const db = getDatabase();
        const orderData = ref(db, 'courierRequest');
        onValue( orderData , (snapshot) => {
          const data1 = snapshot.val();
          console.log(data1);
          setCourier(data1);
        })
    },[]);
    return (
        <div className='orderTable'>
            <hr></hr>
            <table style={{ width: "93%" }} >
                <tr>
                    <th >Destination</th>
                    <th >Distance</th>
                    <th >Cost</th>
                    <th >Time</th>
                    <th >Truck</th>
                    <th>Status</th>
                </tr>
                {courierD.map((data, index) => {
                    return (
                        (
                            (data.senderPhoneNo.toLowerCase().includes(props.searchValue.toLocaleLowerCase()) 
                            &&
                                data.status.toLowerCase().includes(props.status))
                            &&  
                            <tr key={index}>
                                <td style={{ position: 'relative', left: "10px" }}>{data.destination}</td>
                                <td style={{ position: 'relative', left: "10px" }}>{data.distance}</td>
                                <td style={{ position: 'relative', left: "10px" }}>{data.cost}</td>
                                <td style={{ position: 'relative', left: "10px" }}>{data.time}</td>
                                <td style={{ position: 'relative', left: "10px" }} >{data.truck}</td>
                                {data.status.toLowerCase() === "pending" ?
                                    (<td><p className='notverified' style={{fontSize:"18px"}} value={data} onClick={() => {
                                        const db = getDatabase();
                                        update(ref(db, 'courierRequest/' + index), {
                                            status: "Done"
                                        });
                                        console.log(data);
                                        alert("Success: True");
                                    }}>Pending</p></td>)
                                    :(
                                        <td className='verified' style={{fontSize:"18px"}}>Done</td>
                                    )
                                }
                            </tr>
                        )
                    )

                })}
            </table>
        </div>
    )
}

