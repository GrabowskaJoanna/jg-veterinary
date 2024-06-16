import React from "react";

const SelectInput = ({ text, options, name, value, onChange, hasError }) => {
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
        {hasError && <p className="error_message">To pole jest wymagane!</p>}
      </label>
    </>
  );
};

export default SelectInput;
