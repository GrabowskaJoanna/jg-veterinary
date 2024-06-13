import { configureStore } from "@reduxjs/toolkit";
import listReducer from "./listSlice";
import sessionReducer from "./sessionSlice";
import modalReducer from "./modalSlice";

const store = configureStore({
  reducer: {
    list: listReducer,
    session: sessionReducer,
    modal: modalReducer,
  },
});

export default store;
