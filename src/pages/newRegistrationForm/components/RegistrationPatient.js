import React from "react";
import TextField from "../../../abstract/inputs/TextField";

const RegistrationPatient = () => {
  return (
    <>
      <h2 className="registration_section_header">Pacjent:</h2>
      <div className="registration_section">
        <section className="registration_inputs">
          <TextField text="Nr chipa" name="chip" type="text" />
          <TextField text="Imię" name="patient_name" type="text" />
        </section>
        <section className="registration_inputs">
          <TextField text="Gatunek" name="species" type="text" />
          <TextField text="Wiek" name="age" type="number" />
        </section>
        <div className="single_input">
          <TextField text="Rasa" name="breed" type="text" />
        </div>
      </div>
    </>
  );
};

export default RegistrationPatient;
