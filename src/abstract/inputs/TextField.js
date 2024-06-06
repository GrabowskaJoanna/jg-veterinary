import React, { useState } from "react";

const TextField = ({ type, name, text, value, onChange }) => {
  return (
    <label>
      {text}
      <input type={type} name={name} value={value} onChange={onChange} />
    </label>
  );
};

export default TextField;
