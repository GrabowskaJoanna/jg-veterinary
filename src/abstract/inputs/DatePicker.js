import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DateInput = ({
  text,
  name,
  onChange,
  selectedDate,
  className,
  errorMessage,
}) => {
  return (
    <div>
      <label>
        {text}
        <DatePicker
          name={name}
          selected={selectedDate}
          onChange={onChange}
          dateFormat="dd/MM/yyyy"
          className={className}
        />
        {errorMessage && <p className="error_message">{errorMessage}</p>}
      </label>
    </div>
  );
};

export default DateInput;
