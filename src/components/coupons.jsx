import React, {useState } from 'react'
import { getDatabase, ref, remove,update} from "firebase/database";

export default function Cooopons(props) {
    const [couponDetails, setCouponDetails] = useState({
        couponName: "",
        discountPercentage: ""
    })
    function Add() {
        const db = getDatabase();
        update(ref(db,'coupons/'), {
            [couponDetails.couponName]:couponDetails.discountPercentage
        });
    }
    function Onchange(event) {
        const { name, value } = event.target;
        setCouponDetails(prevValue => {
            return {
                ...prevValue,
                [name]: value
            }
        })        
    }
    
    return (
        <div style={{ "marginTop": "7%", marginLeft: "20%" }}>
            <div>
                <input type='text' name='couponName' value={couponDetails.couponName} onChange={Onchange} placeholder='Coupon Name' style={{ margin: "1% 1% 1% 1%", width: "35%", height: "30px" }}></input>
                <input type='text' name='discountPercentage' value={couponDetails.discountPercentage} onChange={Onchange} placeholder='Discount in Percentage' style={{ margin: "1% 1% 1% 1%", width: "35%", height: "30px" }}></input>
                <button className="btn btn-success" style={{ width: "15%", height: "30px", marginBottom: "1%" }} onClick={Add}>Add Coupon</button>
            </div>
            <table style={{ width: "97%" }} >
                <tr>
                    <th>Coupon</th>
                    <th >Discount %</th>
                    <th >Remove</th>
                </tr>
                
                {props.data && Object.keys(props.data).map((couponName, index) => {
                    return (
                        (
                            <tr >
                                <td >{couponName}</td>
                                <td >{Object.values(props.data)[index]}</td>
                                <td style={{ color: "red", cursor: "pointer" }}
                                    onClick={() => {
                                        const db = getDatabase();
                                        // console.log(coupon.couponId);
                                        remove(ref(db, 'coupons/' + couponName));
                                    }}>Remove</td>
                            </tr>
                        )
                    )

                })}
            </table></div>
    )
}
