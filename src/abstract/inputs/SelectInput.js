import React from "react";

const SelectInput = ({ text, options, name }) => {
  return (
    <>
      <label>
        {text}
        <select name={name}>
          {options.map((option, index) => (
            <option value={option} key={index}>
              {option}
            </option>
          ))}
        </select>
      </label>
    </>
  );
};

export default SelectInput;
