import React from "react";
import { Link } from "react-router-dom";
import "./buttongroup.scss";

const Buttongroup = () => {
  return (
    <div className="flexbtn">
      <div className="btn-group ">
        <a href="#" className="btn  active" aria-current="page">
          Popular
        </a>
        <a href="#" className="btn">
          Just Launched
        </a>
        <a href="#" className="btn ">
          Upcoming
        </a>

        <Link to="/Allcars" className="viewall">
          Viewall<span>{" >"}</span>
        </Link>
      </div>
    </div>
  );
};

export default Buttongroup;
