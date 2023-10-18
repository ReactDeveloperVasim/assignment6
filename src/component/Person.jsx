import React from "react";

export const Person=({fname,lname,mobile,email,city,pincode})=>{
    return(
        <div className="sub">
        
            <h1>Personal Details</h1><hr/>
            <h2>FullName : {fname} {lname}</h2>
            
           
            <h2>Email-Id : {email} </h2>
            <h2>City : {city}</h2>
            <h2>Pincode : {pincode} </h2>
        </div>
    );
}