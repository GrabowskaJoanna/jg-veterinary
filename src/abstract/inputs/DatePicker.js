import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DateInput = ({
  text,
  name,
  onChange,
  selectedDate,
  className,
  hasError,
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
        {hasError && <p className="error_message">To pole jest wymagane!</p>}
      </label>
    </div>
  );
};

export default DateInput;
