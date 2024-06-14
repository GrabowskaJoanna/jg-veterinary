import React, { useState } from "react";

const TextField = ({ type, name, text, value, onChange, className }) => {
  return (
    <label>
      {text}
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className={className}
      />
    </label>
  );
};

export default TextField;
