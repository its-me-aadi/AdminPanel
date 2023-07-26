import React from 'react'
import "../styles/orderTable.css"

export default function ordersTable(props) {

    return (
        <div className='orderTable'>
            <table style={{ width: "93%" }} >
                <tr>
                    <th>User ID</th>
                    <th >Username</th>
                    <th >Mail ID</th>
                    <th >Contact No.</th>
                    <th >Location</th>
                </tr>
                {props.tableData.map((data,index) => {
                  return(
                    (
                      data.userID.toLowerCase().includes(props.searchValue.toLocaleLowerCase()) 
                      && 
                      <tr key={index}>
                          <td style={{ position: 'relative', left: "10px" }} >{data.userID}</td>
                          <td style={{ position: 'relative', left: "10px" }} >{data.name}</td>
                          <td style={{ position: 'relative', left: "10px" }}>{data.mail}</td>
                          <td style={{ position: 'relative', left: "10px" }}>{data.contactNumber}</td>
                          <td style={{ position: 'relative', left: "10px" }}>{data.location}</td>
                      </tr>
                    )
                  )
                  
                })}
            </table>
        </div>
    )
}
