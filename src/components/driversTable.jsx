import React from 'react'
import "../styles/orderTable.css"
import { useNavigate } from 'react-router-dom'

export default function DriversTable(props) {
  const navigate = useNavigate();
  function Onclick(index) {
    localStorage.setItem("driverID", index);
    navigate("/verify-driver");
  }

  return (
    <div className='orderTable'>
      <hr></hr>
      <table style={{ width: "93%" }} >
        <tr>
          <th>Driver ID</th>
          <th >Username</th>
          <th >Contact No.</th>
          <th >Location</th>
          <th >Status</th>
          <th>Verification Status</th>
        </tr>
        {props.tableData.map((data, index) => {
          return (
            (
              (data.driverId.toLowerCase().includes(props.searchValue.toLocaleLowerCase())
                &&
                data.status.toLowerCase().includes(props.orderType))
              &&
              <tr>
                <td style={{ position: 'relative', left: "10px" }} >{data.driverId}</td>
                <td style={{ position: 'relative', left: "10px" }} >{data.name}</td>
                <td style={{ position: 'relative', left: "10px" }}>{data.contactNumber}</td>
                <td style={{ position: 'relative', left: "10px" }}>{data.location}</td>
                <td style={{ position: 'relative', left: "10px" }}>{data.status}</td>
                <td style={{ position: 'relative', left: "10px" }}>
                  {
                    (data.verification.photo &&
                      data.verification.phoneNumber &&
                      data.verification.mail &&
                      data.verification.adharCard) ?
                      (<p className="verified" value={index} onClick={()=>Onclick(index)}>Verified</p>) :
                      (<p className="notverified" value={index} onClick={()=>Onclick(index)}>Not Verified</p>)
                  }
                </td>
              </tr>
            )
          )

        })}
      </table>
    </div>
  )
}
