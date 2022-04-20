import { Card, Button } from "react-bootstrap";
import imgcard from "../../Assets/detailArrow.svg";

import React from "react";
import { carDetails } from "../../Models/carDetails";

const Carcard = (props: any) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={props.carDetail.image} />
      <Card.Body className="cardflex">
        <Card.Title>{props.carDetail.name}</Card.Title>
        <Card.Text>{props.carDetail.price} price onwards</Card.Text>

        <img src={imgcard} alt="" />
      </Card.Body>
    </Card>
  );
};

export default Carcard;
