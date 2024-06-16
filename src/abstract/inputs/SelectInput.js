import React from "react";

const SelectInput = ({
  text,
  options,
  name,
  value,
  onChange,
  errorMessage,
}) => {
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
        {errorMessage && <p className="error_message">{errorMessage}</p>}
      </label>
    </>
  );
};

export default SelectInput;
