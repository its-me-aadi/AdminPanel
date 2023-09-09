import React from 'react'
import "../styles/orderTable.css"

export default function ordersTable(props) {

    return (
        <div className='orderTable'>
            <table style={{ width: "93%" }} >
                <tr>
                    <th >Username</th>
                    <th >Mail ID</th>
                    <th >Contact No.</th>
                    <th >City</th>
                    <th>Pin Code</th>
                </tr>
                {props.tableData.map((data,index) => {
                  return(
                    (
                      data.phoneNumber.toLowerCase().includes(props.searchValue.toLocaleLowerCase()) 
                      && 
                      <tr key={index}>
                          <td style={{ position: 'relative', left: "10px" }} >{data.fullName}</td>
                          <td style={{ position: 'relative', left: "10px" }}>{data.email}</td>
                          <td style={{ position: 'relative', left: "10px" }}>{data.phoneNumber}</td>
                          <td style={{ position: 'relative', left: "10px" }}>{data.city}</td>
                          <td style={{ position: 'relative', left: "10px" }} >{data.pincode}</td>
                      </tr>
                    )
                  )
                  
                })}
            </table>
        </div>
    )
}
