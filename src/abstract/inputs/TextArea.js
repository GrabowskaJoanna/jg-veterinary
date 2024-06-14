import React from "react";

const TextArea = ({ text, name, value, onChange }) => {
  return (
    <>
      <label>
        {text}
        <textarea name={name} value={value} onChange={onChange} />
      </label>
    </>
  );
};

export default TextArea;
