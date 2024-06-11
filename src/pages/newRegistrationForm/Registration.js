import React from "react";
import NavBar from "../../abstract/NavBar";
import Footer from "../../abstract/Footer";
import RegistrationAppointment from "./components/RegistrationAppointment";
import RegistrationPatient from "./components/RegistrationPatient";
import RegistrationOwner from "./components/RegistrationOwner";
import Button from "../../abstract/buttons/Button";

export const Registration = () => {
  return (
    <>
      <NavBar />
      <h1 className="registration_header">Rejestracja</h1>
      <div className="registration_container">
        <RegistrationAppointment />
        <RegistrationPatient />
        <RegistrationOwner />
        <div className="registration_buttons">
          <Button text="Anuluj" className="btn secondary_button" />
          <Button text="Zapisz" className="btn primary_button" />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Registration;
