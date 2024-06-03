import React from "react";
import NavBar from "../../abstract/NavBar";
import Footer from "../../abstract/Footer";
import TextArea from "../../abstract/inputs/TextArea";
import RegistrationAppointment from "./components/RegistrationAppointment";
import RegistrationPatient from "./components/RegistrationPatient";
import RegistrationOwner from "./components/RegistrationOwner";
import DatePicker from "../../abstract/inputs/DatePicker";
import PrimaryButton from "../../abstract/buttons/PrimaryButton";

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
          <PrimaryButton text="Zapisz" className="primary-button" />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Registration;
