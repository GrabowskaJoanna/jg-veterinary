import React from "react";
import TextField from "../../../abstract/inputs/TextField";
import { useDispatch, useSelector } from "react-redux";
import { updatePatientFormField } from "../../store/formSlice";

const RegistrationPatient = () => {
  const dispatch = useDispatch();
  const visitFormPatient = useSelector((state) => state.form.patient);
  // const handleInputUpdate = (field, value) => {
  //   dispatch(updatePatientFormField({ field, value }));
  // };

  const handleInputUpdate = (field, value) => {
    if (field === "age") {
      const parsedValue = parseFloat(value);
      if (!isNaN(parsedValue)) {
        value = parsedValue;
      } else {
        value = 0;
      }
    }
    dispatch(updatePatientFormField({ field, value }));
  };

  return (
    <>
      <h2 className="registration_section_header">Pacjent:</h2>
      <div className="registration_section">
        <section className="registration_inputs">
          <TextField
            text="Nr chipa"
            name="chipNumber"
            type="text"
            value={visitFormPatient.chipNumber}
            onChange={(e) => handleInputUpdate("chipNumber", e.target.value)}
          />
          <TextField
            text="Imię"
            name="petName"
            type="text"
            value={visitFormPatient.petName}
            onChange={(e) => handleInputUpdate("petName", e.target.value)}
          />
        </section>
        <section className="registration_inputs">
          <TextField
            text="Gatunek"
            name="species"
            type="text"
            value={visitFormPatient.species}
            onChange={(e) => handleInputUpdate("species", e.target.value)}
          />
          <TextField
            text="Wiek"
            name="age"
            type="number"
            value={visitFormPatient.age}
            onChange={(e) => handleInputUpdate("age", e.target.value)}
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
