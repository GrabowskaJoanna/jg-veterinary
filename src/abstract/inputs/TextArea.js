import React from "react";

const TextArea = ({ text, name }) => {
  return (
    <>
      <label>
        {text}
        <textarea name={name}></textarea>
      </label>
    </>
  );
};

export default TextArea;
