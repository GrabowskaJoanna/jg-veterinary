import React, { useEffect } from "react";
import NavBar from "../../abstract/NavBar";
import Footer from "../../abstract/Footer";
import RegistrationAppointment from "./components/RegistrationAppointment";
import RegistrationPatient from "./components/RegistrationPatient";
import RegistrationOwner from "./components/RegistrationOwner";
import Button from "../../abstract/buttons/Button";
import { useNavigate } from "react-router-dom";

export const Registration = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/");
    }
  }, [navigate]);

  if (token) {
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
  } else {
    return null;
  }
};

export default Registration;
