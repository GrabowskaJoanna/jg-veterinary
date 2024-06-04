import React from "react";
import TextArea from "../../../abstract/inputs/TextArea";
import SelectInput from "../../../abstract/inputs/SelectInput";
import TextField from "../../../abstract/inputs/TextField";
import DatePicker from "../../../abstract/inputs/DatePicker";

const RegistrationAppointment = () => {
  return (
    <>
      <h2 className="registration-section-header">Wizyta:</h2>
      <div className="registration-section">
        <section className="registration-inputs">
          <TextField text="Cel wizyty" name="visit-purpose" type="text" />
          <DatePicker text="Data wizyty" />
        </section>
        <TextArea text="Opis" />
        <section className="registration-selects single-input">
          <SelectInput text="Status" options={["Option 1", "Option 2"]} />
        </section>
      </div>
    </>
  );
};

export default RegistrationAppointment;
