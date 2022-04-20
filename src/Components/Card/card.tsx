import { Card, Button } from "antd";

import imgcard from "../../Assets/detailArrow.svg";

import React from "react";
import { carDetails } from "../../Models/carDetails";
const { Meta } = Card;

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

      <div className="cardsdiv">
        <Card
          hoverable
          cover={
            <img
              style={{ width: "20rem" }}
              className={"pic"}
              alt="example"
              src={props.carDetail.image}
            />
          }
        >
          <Meta
            title={props.carDetail.name}
            description={props.carDetail.price}
          />

          <Button>Test</Button>
        </Card>
      </div>
    </div>
  );
};

export default Carcard;
