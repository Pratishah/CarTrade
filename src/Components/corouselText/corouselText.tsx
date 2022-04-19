import React from "react";
import "./corouselText.scss";

const CorouselText = (props: any) => {
  return (
    <div>
      <h1 className={"font"}>{props.text}</h1>
    </div>
  );
};

export default CorouselText;
