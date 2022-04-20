import { Card } from "antd";
import Button from "../Button/Button";
import "./Card.scss";
import imgcard from "../../Assets/detailArrow.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { carDetails } from "../../Models/carDetails";

const { Meta } = Card;
const bstyles = {
  border: "1px solid rgba(0, 0, 0, 0.2)",
};
const Carcard = (props: any) => {
  return (
    <div>
      {/* <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={props.carDetail.image} />
        <Card.Body>
          <Card.Title>{props.carDetail.name}</Card.Title>
          <Card.Text>{props.carDetail.price} price onwards</Card.Text>

          <span style={{ height: "2rem" }}>
            <img src={imgcard} alt="" />
          </span>
        </Card.Body>
      </Card> */}

      <div id="cardsdiv" style={bstyles}>
        <Card
          className="carditem"
          hoverable
          cover={
            <img
              style={{ width: "15rem" }}
              className="pic"
              alt="example"
              src={props.carDetail.image}
            />
          }
        >
          <div className="row" style={{ maxHeight: "4rem", color: "black" }}>
            <div className="col-9">
              <Meta
                className="content"
                title={props.carDetail.name}
                description={props.carDetail.price + " onwards"}
              />
            </div>
            <div className="col-2">
              <button className="{btnmargin}" style={{ marginTop: "0.5rem" }}>
                {">"}
              </button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Carcard;
