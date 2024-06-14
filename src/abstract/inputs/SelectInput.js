import React from "react";

const SelectInput = ({ text, options, name, value, onChange }) => {
  return (
    <>
      <label>
        {text}
        <select name={name} value={value} onChange={onChange}>
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
