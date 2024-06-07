import React from "react";
import { Link } from "react-router-dom";

const Button = ({ text, className, onClick, type }) => {
  return (
    <>
      <button className={className} onClick={onClick} type={type}>
        {text}
      </button>
    </>
  );
};

export default Button;
