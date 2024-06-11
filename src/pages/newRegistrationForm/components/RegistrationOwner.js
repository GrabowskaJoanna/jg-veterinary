import React from "react";
import TextField from "../../../abstract/inputs/TextField";

const RegistrationOwner = () => {
  return (
    <>
      <h2 className="registration_section_header">Właściciel:</h2>
      <div className="registration_section">
        <section className="registration_inputs">
          <TextField text="Imię" name="owner_name" type="text" />
          <TextField
            text="Numer telefonu"
            name="telephone_number"
            type="text"
          />
        </section>
        <section className="registration_inputs">
          <TextField text="Nazwisko" name="owner_surname" type="text" />
          <TextField text="Email" name="email" type="email" />
        </section>
        <div className="last_input">
          <TextField text="Pesel" name="pesel" type="text" />
        </div>
      </div>
    </>
  );
};

export default RegistrationOwner;
