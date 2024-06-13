import { createSlice } from "@reduxjs/toolkit";
import { deleteItem } from "./listSlice";

const initialModalState = {
  isVisible: false,
  row: null,
};
const modalSlice = createSlice({
  name: "modal",
  initialState: initialModalState,
  reducers: {
    showModal(state, action) {
      state.isVisible = true;
      state.row = action.payload;
    },
    hideModal(state) {
      state.isVisible = false;
      state.row = null;
    },
  },
});

export const { showModal, hideModal, deleteRow } = modalSlice.actions;
export default modalSlice.reducer;
