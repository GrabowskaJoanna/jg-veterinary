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
      <h1 className="registration-header">Rejestracja</h1>
      <div className="registration-container">
        <RegistrationAppointment />
        <RegistrationPatient />
        <RegistrationOwner />
        <div className="registration-buttons">
          <Button text="Anuluj" className="btn secondary-button" />
          <Button text="Zapisz" className="btn primary-button" />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Registration;
