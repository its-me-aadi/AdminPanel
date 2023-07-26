import React from 'react'
import "../styles/orderTable.css"
import { getDatabase, ref, set,remove } from "firebase/database";

export default function OrdersTable(props) {
    return (
        <div className='orderTable'>
           <hr></hr>
            <table style={{ width: "93%" }} >
                <tr>
                    <th >Order ID</th>
                    <th >Username</th>
                    <th >Service Name</th>
                    <th >Payment Pending</th>
                    <th >Order Status</th>
                </tr>
                {props.tableData.map((data,index) => {
                  return(
                    (
                      (data.orderId.toLowerCase().includes(props.searchValue.toLocaleLowerCase()) 
                      &&
                      data.OrderStatus.toLowerCase().includes(props.orderType))
                      &&  
                      <tr key={index}>
                          <td style={{ position: 'relative', left: "10px" }} >{data.orderId}</td>
                          <td style={{ position: 'relative', left: "10px" }}>{data.name}</td>
                          <td style={{ position: 'relative', left: "10px" }}>{data.ServiceName}</td>
                          <td style={{ position: 'relative', left: "10px" }}>{data.PaymentPending}</td>
                          <td style={{ position: 'relative', left: "10px" }}>{data.OrderStatus}</td>
                          {props.orderType==="pending" && 
                          <button className='btn btn-success' style={{width:"150px"}} value={data} onClick={()=>{
                            const db = getDatabase();
                            set(ref(db, 'driverReq/' + data.orderId), {
                              username: data.name,
                              userId:data.orderId,
                              pendingPayment:data.PaymentPending,
                              location:"Jaipur"
                            });
                            remove(ref(db,'orders/'+index));
                            console.log(data);
                            alert("Success: true");
                          }} >Notify Drivers</button>
                          }
                      </tr>
                    )
                  )
                  
                })}
            </table>
        </div>
    )
}
