import React from "react";
import TextArea from "../../../abstract/inputs/TextArea";
import SelectInput from "../../../abstract/inputs/SelectInput";
import TextField from "../../../abstract/inputs/TextField";
import DatePicker from "../../../abstract/inputs/DatePicker";
import { useDispatch, useSelector } from "react-redux";
import {
  setVisitDate,
  setVisitStatus,
  updateVisitFormField,
} from "../../store/formSlice";

const RegistrationAppointment = () => {
  const visitFormVisit = useSelector((state) => state.form.visit);
  const dispatch = useDispatch();
  const handleInputChange = (field, value) => {
    dispatch(updateVisitFormField({ field, value }));
  };

  const handleVisitStatusChange = (selectedStatus) => {
    dispatch(setVisitStatus(selectedStatus));
  };

  const handleVisitDateChange = (selectedDate) => {
    dispatch(setVisitDate(selectedDate));
  };
  return (
    <>
      <h2 className="registration_section_header">Wizyta:</h2>
      <div className="registration_section">
        <section className="registration_inputs">
          <TextField
            text="Cel wizyty"
            name="visitPurpose"
            type="text"
            value={visitFormVisit.visitPurpose}
            onChange={(e) => handleInputChange("visitPurpose", e.target.value)}
          />
          <DatePicker
            text="Data wizyty"
            name="visitDate"
            value={visitFormVisit.visitDate}
            onChange={handleVisitDateChange}
          />
        </section>
        <TextArea
          name="visitDescription"
          text="Opis"
          value={visitFormVisit.visitDescription}
          onChange={(e) =>
            handleInputChange("visitDescription", e.target.value)
          }
        />
        <section className="registration_selects single_input">
          <SelectInput
            name="status"
            text="Status"
            options={["Standard", "Pilne"]}
            value={visitFormVisit.status}
            onChange={(e) => handleVisitStatusChange(e.target.value)}
          />
        </section>
      </div>
    </>
  );
};

export default RegistrationAppointment;
