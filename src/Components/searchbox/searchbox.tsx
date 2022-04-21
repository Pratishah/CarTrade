import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import CorouselText from "../corouselText/corouselText";
import "./searchbox.scss";

const Searchbox = () => {
  const [searchtext, setSearchText] = useState("");
  const Search_handle: any = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
    console.log(event.target.value);
  };

  let navigate = useNavigate();
  const routeChange = () => {
    let path = `./${searchtext}`;
    navigate(path);
  };

  return (
    <div className="centered">
      <div>
        <CorouselText props="find your Dream car" />
      </div>
      <div className="searchmaindiv">
        <div>
          <input className={"searchbox"} onChange={Search_handle}></input>
        </div>
        <div>
          <Button
            onClick={routeChange}
            height="3rem"
            width="6rem"
            children="Search"
          />
        </div>
      </div>
    </div>
  );
};

export default Searchbox;
