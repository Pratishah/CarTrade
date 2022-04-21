import React from "react";
import { Link } from "react-router-dom";
import "./buttongroup.scss";

const Buttongroup = () => {
  return (
    <div className="flexbtn">
      <div className="btn-group ">
        <Link to="SUV" className="btn  active" aria-current="page">
          Popular
        </Link>
        <Link to="sedan" className="btn">
          Just Launched
        </Link>
        <Link to="./hatchback" className="btn ">
          Upcoming
        </Link>

        <Link to="/ViewAllCars" className="viewall">
          Viewall<span>{" >"}</span>
        </Link>
      </div>
    </div>
  );
};

export default Buttongroup;
