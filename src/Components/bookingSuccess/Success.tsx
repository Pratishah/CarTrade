import React from "react";
import success from "../../Assets/bookingsuccess.svg";
import bmw from "../../Assets/BMW.svg";
import sbmw from "../../Assets/sbmw.svg";

const Success = () => {
  return (
    <div className="successcontainer container-fluid">
      <div className="success container">
        <img src={sbmw} alt="" />
        <br></br>
        <h1>Booking Successful</h1>
        <h2>download the booking summary</h2>
      </div>
      <div className=" container-fluid">
        <div className="container">
          <img className="bmwcontainer" src={bmw} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Success;
