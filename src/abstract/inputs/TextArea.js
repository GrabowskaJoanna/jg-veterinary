import React from "react";

const TextArea = ({ text, name, value, onChange, className, hasError }) => {
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
        {hasError && <p className="error_message">To pole jest wymagane!</p>}
      </label>
    </>
  );
};

export default TextArea;
