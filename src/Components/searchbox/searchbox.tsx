import React from "react";
import Button from "../Button/Button";
import "./searchbox.scss";

const Searchbox = () => {
  const Search_handle: any = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        position: "relative",
        zIndex: 99,
        margin: "-13rem",
      }}
    >
      <div>
        <input className={"searchbox"} onChange={Search_handle}></input>
      </div>
      <div>
        <Button height="3rem" width="6rem" children="Search" />
      </div>
    </div>
  );
};

export default Searchbox;
