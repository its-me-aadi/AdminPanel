import React from 'react'
import "../styles/orderTable.css"
import { getDatabase, ref, set,update } from "firebase/database";

export default function OrdersTable(props) {
    return (
        <div className='orderTable'>
           <hr></hr>
            <table style={{ width: "93%" }} >
                <tr>
                    <th >Username</th>
                    <th >Service Name</th>
                    <th >City</th>
                    <th >Order Status</th>
                    <th >Contact Number</th>
                    {props.orderType==="pending" && <th>Notify</th>}
                </tr>
                {props.tableData.map((data,index) => {
                  return(
                    (
                      (data.phoneNumber.toLowerCase().includes(props.searchValue.toLocaleLowerCase()) 
                      &&
                      data.OrderStatus.toLowerCase().includes(props.orderType))
                      &&  
                      <tr key={index}>
                          <td style={{ position: 'relative', left: "10px" }}>{data.name}</td>
                          <td style={{ position: 'relative', left: "10px" }}>Driver Request</td>
                          <td style={{ position: 'relative', left: "10px" }}>{data.city}</td>
                          <td style={{ position: 'relative', left: "10px" }}>{data.OrderStatus}</td>
                          <td style={{ position: 'relative', left: "10px" }} >{data.phoneNumber}</td>
                          {props.orderType==="pending" && 
                          <td><p className="verified" value={data} onClick={()=>{
                            const db = getDatabase();
                            set(ref(db, 'driverRequests/' + data.phoneNumber), {
                              OrderStatus: "Pending",
                              city: data.city,
                              email: data.email,
                              houseNo: data.houseNo,
                              name: data.name,
                              phoneNumber: data.phoneNumber,
                              pincode: data.pincode,
                              streetName: data.streetName
                            });
                           update(ref(db,'userRequests/'+index),{
                              OrderStatus:"Driver Request"
                           });
                            console.log(data);
                            alert("Success: true");
                          }}  >Notify Drivers</p></td>
                          }
                      </tr>
                    )
                  )
                  
                })}
            </table>
        </div>
    )
}
