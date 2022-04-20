import React from "react";
import "./nav.scss";

const Nav = () => {
  return (
    <div className="container nav">
      <div className={"row"}>
        <div className={"col-4"}> CarsTrade</div>
        <div className={"col"}>2 of 3</div>
        <div className={"col-4"}>3 of 3</div>
      </div>
    </div>
  );
};

export default Nav;
