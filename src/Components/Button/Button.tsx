import "./button.scss";
import { btnType } from "./buttontype";
import React from "react";

const Button: React.FC<any> = ({ children, height, width, ...buttonprop }) => {
  return (
    <button
      onClick={buttonprop.onClick}
      style={{
        backgroundColor: "brown",

        // border: "1px soid brown",
        borderRadius: "0.2rem",
        height,
        width,
        color: "white",
      }}
    >
      {children}
    </button>
  );
};

export default Button;
