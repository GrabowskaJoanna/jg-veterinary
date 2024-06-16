import React from "react";

const TextArea = ({ text, name, value, onChange, className, errorMessage }) => {
  return (
    <>
      <label>
        {text}
        <textarea
          name={name}
          value={value}
          onChange={onChange}
          className={className}
        />
        {errorMessage && <p className="error_message">{errorMessage}</p>}
      </label>
    </>
  );
};

export default TextArea;
