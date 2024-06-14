import React, { useEffect } from "react";
import NavBar from "../../abstract/NavBar";
import Footer from "../../abstract/Footer";
import RegistrationAppointment from "./components/RegistrationAppointment";
import RegistrationPatient from "./components/RegistrationPatient";
import RegistrationOwner from "./components/RegistrationOwner";
import Button from "../../abstract/buttons/Button";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import visitActions from "../visitList/visitActions";

const Registration = () => {
  const token = sessionStorage.getItem("token");
  const navigate = useNavigate();
  const form = useSelector((state) => state.form);
  const visit = useSelector((state) => state.form.visit);
  const patient = useSelector((state) => state.form.patient);
  const owner = useSelector((state) => state.form.owner);
  const dispatch = useDispatch();
  const handleSaveForm = () => {
    const flatFormState = {
      success: true,
      id: form.id,
      visitPurpose: visit.visitPurpose,
      visitDate: visit.visitDate,
      visitDescription: visit.visitDescription,
      status: visit.status,
      chipNumber: patient.chipNumber,
      petName: patient.petName,
      species: patient.species,
      age: patient.age,
      breed: patient.breed,
      race: patient.breed,
      name: owner.name,
      phoneNumber: owner.phoneNumber,
      surname: owner.surname,
      emailAddress: owner.emailAddress,
      pesel: owner.pesel,
    };
    fetch(`http://localhost:7080/api/visits`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + token,
      },
      body: JSON.stringify(flatFormState),
    })
      .then((response) => {
        if (response.ok) {
          dispatch(visitActions.fetchVisits());
          navigate("/visitList");
        } else {
          console.error("Wizyta nie została zapisana");
        }
      })
      .catch((error) => {
        console.error("Błąd sieci", error);
      });
    console.log("Sending form data to server:", flatFormState);
  };

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
            <Button
              text="Zapisz"
              className="btn primary_button"
              onClick={handleSaveForm}
            />
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
