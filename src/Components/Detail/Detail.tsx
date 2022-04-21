import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { json } from "stream/consumers";
import Button from "../Button/Button";
import "./Detail.scss";

const Detail = (props: any) => {
  const carid = useParams();

  let navigate = useNavigate();
  const routeChange = () => {
    let path = "/Form";
    navigate(path);
  };

  //   <div>{JSON.stringify(carid)}.id</div>;

  return (
    <div>
      <div className="detailcontainer">
        {carid.id}
        <div className="buybutton">
          <Button height="2rem" onClick={routeChange}>
            Buynow
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Detail;
