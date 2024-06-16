import React, { useState } from "react";

const TextField = ({
  type,
  name,
  text,
  value,
  onChange,
  className,
  errorMessage,
}) => {
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
      {errorMessage && <p className="error_message">{errorMessage}</p>}
    </label>
  );
};

export default TextField;
