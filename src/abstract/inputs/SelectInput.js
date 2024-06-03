import React from "react";

const SelectInput = ({ text, options }) => {
  return (
    <>
      <label>
        {text}
        <select>
          {options.map((option, index) => (
            <option key={index}>{option}</option>
          ))}
        </select>
      </label>
    </>
  );
};

export default SelectInput;
