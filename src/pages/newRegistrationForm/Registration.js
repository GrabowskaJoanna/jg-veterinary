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
  const visit = useSelector((state) => state.form.visit);
  const patient = useSelector((state) => state.form.patient);
  const owner = useSelector((state) => state.form.owner);
  const dispatch = useDispatch();

  const validation = () => {
    const newErrors = [];

    if (!visit.visitPurpose) {
      newErrors.push({
        field: "visitPurpose",
        message: "Cel wizyty jest wymaganay",
      });
    } else if (visit.visitPurpose.length < 3) {
      newErrors.push({
        field: "visitPurpose",
        message: "Cel wizyty jest za krótki",
      });
    }
    if (!visit.visitDescription) {
      newErrors.push({
        field: "visitDescription",
        message: "Wymagany opis wizyty",
      });
    } else if (visit.visitDescription.length < 10) {
      newErrors.push({
        field: "visitDescription",
        message: "Opis wizyty jest za krótki",
      });
    }
    if (!visit.visitDate) {
      newErrors.push({ field: "visitDate", message: "Wymagana data wizyty" });
    }
    if (!patient.chipNumber) {
      newErrors.push({ field: "chipNumber", message: "Wymagany numer chip" });
    } else if (patient.chipNumber.length !== 15) {
      newErrors.push({
        field: "chipNumber",
        message: "Podany numer chip jest za krótki",
      });
    }
    if (!patient.species) {
      newErrors.push({ field: "species", message: "Gatunek jest wymagany" });
    } else if (patient.species.length < 3) {
      newErrors.push({
        field: "species",
        message: "Podany nazwa gatunku jest za krótka",
      });
    }
    if (!patient.name) {
      newErrors.push({ field: "petName", message: "Wymagane imię pacjenta" });
    } else if (patient.name < 3) {
      newErrors.push({
        field: "petName",
        message: "Podane imię pacjenta jest za krótkie",
      });
    }
    if (!patient.age) {
      newErrors.push({ field: "age", message: "Wymagany wiek pacjenta" });
    }
    if (!owner.name) {
      newErrors.push({
        field: "name",
        message: "Imię właściciela jest wymagane",
      });
    } else if (owner.name.length < 3) {
      newErrors.push({
        field: "name",
        message: "Podane imię właściciela jest za krótkie",
      });
    }
    if (!owner.surname) {
      newErrors.push({ field: "surname", message: "Nazwisko jest wymagane" });
    } else if (owner.surname.length < 3) {
      newErrors.push({
        field: "surname",
        message: "Podane nazwisko jest za krótkie",
      });
    }
    if (!owner.phoneNumber) {
      newErrors.push({
        field: "phoneNumber",
        message: "Wymagany numer telefonu",
      });
    } else if (owner.phoneNumber.length < 7) {
      newErrors.push({
        field: "phoneNumber",
        message: "Podany numer telefonu jest za krótki",
      });
    }
    if (!owner.emailAddress) {
      newErrors.push({
        field: "emailAddress",
        message: "Wymagany adres email",
      });
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(owner.emailAddress)) {
      newErrors.push({
        field: "emailAddress",
        message: "Email jest nieprawidłowy",
      });
    }
    setErrors(newErrors);
    return newErrors.length === 0;
  };
  const hasErrorField = (fieldName) => {
    return errors.some((error) => error.field === fieldName);
  };
  const getErrorMessage = (fieldName) => {
    const error = errors.find((error) => error.field === fieldName);
    return error ? error.message : null;
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
          <RegistrationAppointment
            hasError={hasErrorField}
            getErrorMessage={getErrorMessage}
          />
          <RegistrationPatient
            hasError={hasErrorField}
            getErrorMessage={getErrorMessage}
          />
          <RegistrationOwner
            hasError={hasErrorField}
            getErrorMessage={getErrorMessage}
          />
          <div className="registration_buttons">
            <Button text="Anuluj" className="btn secondary_button" />
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
