import { createSlice } from "@reduxjs/toolkit";

const initialListState = {
  items: [],
  currentPage: 1,
  limit: 10,
  totalItems: 0,
};

const listSlice = createSlice({
  name: "list",
  initialState: initialListState,
  reducers: {
    setPage(state, action) {
      state.currentPage = action.payload;
    },
    setItems(state, action) {
      state.items = action.payload;
    },
  },
});

export const { setPage, setItems } = listSlice.actions;

export default listSlice.reducer;
