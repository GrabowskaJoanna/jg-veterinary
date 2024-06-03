import React from "react";
import TextField from "../../../abstract/inputs/TextField";

const RegistrationOwner = () => {
  return (
    <>
      <h2 className="registration-section-header">Pacjent:</h2>
      <div className="registration-section">
        <section className="registration-inputs">
          <TextField text="Imię" name="owner-name" type="text" />
          <TextField
            text="Numer telefonu"
            name="telephone-number"
            type="text"
          />
        </section>
        <section className="registration-inputs">
          <TextField text="Nazwisko" name="surname" type="text" />
          <TextField text="Email" name="email" type="email" />
        </section>
        <div className="last-input">
          <TextField text="Pesel" name="pesel" type="text" />
        </div>
      </div>
    </>
  );
};

export default RegistrationOwner;
