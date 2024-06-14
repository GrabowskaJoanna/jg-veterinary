import { createSlice } from "@reduxjs/toolkit";

const initialFormState = {
  id: 0,
  visit: {
    visitPurpose: "",
    visitDate: null,
    visitDescription: "",
    status: "",
  },
  patient: {
    chipNumber: "",
    petName: "",
    species: "",
    age: 0,
    breed: "",
  },
  owner: {
    name: "",
    phoneNumber: "",
    surname: "",
    emailAddress: "",
    pesel: "",
  },
};

const formSlice = createSlice({
  name: "form",
  initialState: initialFormState,
  reducers: {
    updateVisitFormField(state, action) {
      const { name, value } = action.payload;
      state.visit[name] = value;
    },
    updatePatientFormField(state, action) {
      const { name, value } = action.payload;
      state.patient[name] = value;
    },
    updateOwnerFormField(state, action) {
      const { name, value } = action.payload;
      state.owner[name] = value;
    },
    setVisitStatus(state, action) {
      state.visit.status = action.payload;
    },
    setVisitDate(state, action) {
      state.visit.visitDate = action.payload;
    },
  },
});

export const {
  updateVisitFormField,
  updatePatientFormField,
  updateOwnerFormField,
  setVisitStatus,
  setVisitDate,
} = formSlice.actions;
export default formSlice.reducer;
