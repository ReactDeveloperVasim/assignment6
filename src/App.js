import React, { useState } from "react";
import { Person } from "./component/Person";
import "./component/Style.css";

function App() {
  const [fname, setFname] = useState(" ");
  const [lname, setLname] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [pincode, setPincode] = useState("");
  return (
    <div className="main">
      <div className="child1">
        <h1 className="head">Input Box</h1>
        <input
          type="text"
          placeholder="Enter Your First Name"
          onChange={(e) => setFname(e.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="Enter Your Last Name"
          onChange={(e) => setLname(e.target.value)}
        />
        <br />
        
        <input
          type="number"
          placeholder="Enter Your Mobile Number"
          onChange={(e) => setMobile(e.target.value)}
        />
        <br />

        <input
          type="email"
          placeholder="Enter Your Email ID"
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="Enter Your City "
          onChange={(e) => setCity(e.target.value)}
        />
        <br />
        <input
          type="number"
          placeholder="Enter Your Pincode"
          onChange={(e) => setPincode(e.target.value)}
        />
      </div>

      <Person
        fname={fname}
        lname={lname}
        mobile={mobile}
        email={email}
        city={city}
        pincode={pincode}
      />
    </div>
  );
}

export default App;
