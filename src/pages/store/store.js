import { configureStore } from "@reduxjs/toolkit";
import listReducer from "./listSlice";
import sessionReducer from "./sessionSlice";
import modalReducer from "./modalSlice";
import formReducer from "./formSlice";

const store = configureStore({
  reducer: {
    list: listReducer,
    session: sessionReducer,
    modal: modalReducer,
    form: formReducer,
  },
});

export default store;
