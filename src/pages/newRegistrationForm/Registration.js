import React, { useEffect, useState } from "react";
import NavBar from "../../abstract/NavBar";
import Footer from "../../abstract/Footer";
import RegistrationAppointment from "./components/RegistrationAppointment";
import RegistrationPatient from "./components/RegistrationPatient";
import RegistrationOwner from "./components/RegistrationOwner";
import Button from "../../abstract/buttons/Button";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import visitActions from "../visitList/visitActions";
import { clearForm } from "../store/formSlice";

const Registration = () => {
  const [errors, setErrors] = useState([]);
  const token = sessionStorage.getItem("token");
  const navigate = useNavigate();
  const form = useSelector((state) => state.form);
  const visit = form.visit;
  const patient = form.patient;
  const owner = form.owner;
  const dispatch = useDispatch();

  const validateObject = (object, errorArray, excludedFields) => {
    Object.keys(object).forEach((key) => {
      if (!excludedFields.includes(key) && !object[key]) {
        errorArray.push(key);
      }
    });

    return errorArray;
  };

  const validation = () => {
    let newErrorsArray = [];
    const excludedFields = ["breed", "pesel"];

    newErrorsArray = validateObject(visit, newErrorsArray, excludedFields);
    newErrorsArray = validateObject(patient, newErrorsArray, excludedFields);
    newErrorsArray = validateObject(owner, newErrorsArray, excludedFields);

    setErrors(newErrorsArray);

    return newErrorsArray.length === 0;
  };
  const hasErrorField = (fieldName) => {
    return errors.some((error) => error === fieldName);
  };
  const goToList = () => {
    navigate("/visitList");
  };

  const handleSaveForm = (e) => {
    e.preventDefault();

    if (!validation()) {
      return;
    }

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
          dispatch(clearForm());
        } else {
          console.error("Wizyta nie została zapisana");
        }
      })
      .catch((error) => {
        console.error("Błąd sieci", error);
      });
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
        <form className="registration_container" onSubmit={handleSaveForm}>
          <RegistrationAppointment hasError={hasErrorField} />
          <RegistrationPatient hasError={hasErrorField} />
          <RegistrationOwner hasError={hasErrorField} />
          <div className="registration_buttons">
            <Button
              text="Anuluj"
              className="btn secondary_button"
              onClick={goToList}
            />
            <Button
              type="submit"
              text="Zapisz"
              className="btn primary_button"
            />
          </div>
        </form>
        <Footer />
      </>
    );
  } else {
    return null;
  }
};

export default Registration;
