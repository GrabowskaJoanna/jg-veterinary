import React from "react";
import TextField from "../../../abstract/inputs/TextField";
import { useDispatch, useSelector } from "react-redux";
import { updatePatientFormField } from "../../store/formSlice";

const RegistrationPatient = ({ hasError, getErrorMessage }) => {
  const dispatch = useDispatch();
  const visitFormPatient = useSelector((state) => state.form.patient);

  const handleInputUpdate = (name, value) => {
    if (name === "age") {
      const parsedValue = parseFloat(value);
      if (!isNaN(parsedValue)) {
        value = parsedValue;
      } else {
        value = 0;
      }
    }
    dispatch(updatePatientFormField({ name, value }));
  };

  return (
    <>
      <h2 className="registration_section_header">Pacjent:</h2>
      <div className="registration_section">
        <section className="registration_inputs">
          <TextField
            text="Nr chipa *"
            name="chipNumber"
            type="text"
            value={visitFormPatient.chipNumber}
            onChange={(e) => handleInputUpdate("chipNumber", e.target.value)}
            className={hasError("chipNumber") ? "error_field" : ""}
            errorMessage={getErrorMessage("chipNumber")}
          />
          <TextField
            text="Imię *"
            name="petName"
            type="text"
            value={visitFormPatient.petName}
            onChange={(e) => handleInputUpdate("petName", e.target.value)}
            className={hasError("petName") ? "error_field" : ""}
            errorMessage={getErrorMessage("petName")}
          />
        </section>
        <section className="registration_inputs">
          <TextField
            text="Gatunek *"
            name="species"
            type="text"
            value={visitFormPatient.species}
            onChange={(e) => handleInputUpdate("species", e.target.value)}
            className={hasError("species") ? "error_field" : ""}
            errorMessage={getErrorMessage("species")}
          />
          <TextField
            text="Wiek *"
            name="age"
            type="number"
            value={visitFormPatient.age}
            onChange={(e) => handleInputUpdate("age", e.target.value)}
            className={hasError("age") ? "error_field" : ""}
            errorMessage={getErrorMessage("age")}
          />
        </section>
        <div className="single_input">
          <TextField
            text="Rasa"
            name="breed"
            type="text"
            value={visitFormPatient.breed}
            onChange={(e) => handleInputUpdate("breed", e.target.value)}
          />
        </div>
      </div>
    </>
  );
};

export default RegistrationPatient;
