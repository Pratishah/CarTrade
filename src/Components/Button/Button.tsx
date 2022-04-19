import "./button.scss";
import { btnType } from "./buttontype";
import React from "react";

const Button: React.FC<btnType> = ({
  children,
  height,

  width,
}) => {
  return (
    <button
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
