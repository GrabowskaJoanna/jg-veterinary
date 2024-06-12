// import reducer from "./reducer";
// import { configureStore } from "@reduxjs/toolkit";
//
// const store = configureStore({
//   reducer,
// });
//
// export default store;

import { configureStore } from "@reduxjs/toolkit";
import listReducer from "./list-slice";
import sessionReducer from "./session-slice";

const store = configureStore({
  reducer: {
    list: listReducer,
    session: sessionReducer,
  },
});

export default store;
