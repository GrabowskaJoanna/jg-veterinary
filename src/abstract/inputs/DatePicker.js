import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DateInput = ({ text, name, onChange, selectedDate }) => {
  return (
    <div>
      <label>
        {text}
        <DatePicker
          name={name}
          selected={selectedDate}
          onChange={onChange}
          dateFormat="dd/MM/yyyy"
        />
      </label>
    </div>
  );
};

export default DateInput;
