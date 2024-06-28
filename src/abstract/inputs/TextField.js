import React from "react";

const TextField = ({
  type,
  name,
  text,
  value,
  onChange,
  className,
  hasError,
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
      {hasError && <p className="error_message">To pole jest wymagane!</p>}
    </label>
  );
};

export default TextField;
