import React from "react";
import TextField from "../../../abstract/inputs/TextField";
import { useDispatch, useSelector } from "react-redux";
import { updateOwnerFormField } from "../../store/formSlice";

const RegistrationOwner = ({ hasError, getErrorMessage }) => {
  const visitForm = useSelector((state) => state.form.owner);
  const dispatch = useDispatch();
  const handleInputChange = (name, value) => {
    dispatch(updateOwnerFormField({ name, value }));
  };

  return (
    <>
      <h2 className="registration_section_header">Właściciel:</h2>
      <div className="registration_section">
        <section className="registration_inputs">
          <TextField
            text="Imię *"
            name="name"
            type="text"
            value={visitForm.name}
            onChange={(e) => handleInputChange("name", e.target.value)}
            className={hasError("name") ? "error_field" : ""}
            errorMessage={getErrorMessage("name")}
          />
          <TextField
            text="Numer telefonu *"
            name="phoneNumber"
            type="text"
            value={visitForm.phoneNumber}
            onChange={(e) => handleInputChange("phoneNumber", e.target.value)}
            className={hasError("phoneNumber") ? "error_field" : ""}
            errorMessage={getErrorMessage("phoneNumber")}
          />
        </section>
        <section className="registration_inputs">
          <TextField
            text="Nazwisko *"
            name="surname"
            type="text"
            value={visitForm.surname}
            onChange={(e) => handleInputChange("surname", e.target.value)}
            className={hasError("surname") ? "error_field" : ""}
            errorMessage={getErrorMessage("surname")}
          />
          <TextField
            text="Email *"
            name="emailAddress"
            type="email"
            value={visitForm.emailAddress}
            onChange={(e) => handleInputChange("emailAddress", e.target.value)}
            className={hasError("emailAddress") ? "error_field" : ""}
            errorMessage={getErrorMessage("emailAddress")}
          />
        </section>
        <div className="single_input">
          <TextField
            text="Pesel"
            name="pesel"
            type="text"
            value={visitForm.pesel}
            onChange={(e) => handleInputChange("pesel", e.target.value)}
            className={hasError("pesel") ? "error_field" : ""}
          />
        </div>
      </div>
    </>
  );
};

export default RegistrationOwner;
