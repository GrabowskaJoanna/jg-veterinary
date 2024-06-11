import React from "react";
import TextArea from "../../../abstract/inputs/TextArea";
import SelectInput from "../../../abstract/inputs/SelectInput";
import TextField from "../../../abstract/inputs/TextField";
import DatePicker from "../../../abstract/inputs/DatePicker";

const RegistrationAppointment = () => {
  return (
    <>
      <h2 className="registration_section_header">Wizyta:</h2>
      <div className="registration_section">
        <section className="registration_inputs">
          <TextField text="Cel wizyty" name="visit_purpose" type="text" />
          <DatePicker text="Data wizyty" name="visit_date" />
        </section>
        <TextArea name="visit_description" text="Opis" />
        <section className="registration_selects single_input">
          <SelectInput
            name="visit_status"
            text="Status"
            options={["Standard", "Pilne"]}
          />
        </section>
      </div>
    </>
  );
};

export default RegistrationAppointment;
