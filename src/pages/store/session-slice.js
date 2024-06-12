import { createSlice } from "@reduxjs/toolkit";

const sessionState = {
  name: "",
  token: "",
};

const sessionSlice = createSlice({
  name: "session",
  initialState: sessionState,
  reducers: {
    login(state, action) {
      state.token = action.payload;
    },
    logout(state) {
      state.token = "";
    },
    setName(state, action) {
      state.name = action.payload;
    },
  },
});

export const { login, logout, setName } = sessionSlice.actions;
export default sessionSlice.reducer;
