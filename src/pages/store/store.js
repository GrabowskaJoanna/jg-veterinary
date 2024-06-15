import { configureStore } from "@reduxjs/toolkit";
import listReducer from "./listSlice";
import modalReducer from "./modalSlice";
import formReducer from "./formSlice";

const store = configureStore({
  reducer: {
    list: listReducer,
    modal: modalReducer,
    form: formReducer,
  },
});

export default store;
