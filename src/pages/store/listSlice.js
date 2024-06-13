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
    setTotalItems(state, action) {
      state.totalItems = action.payload;
    },
    setItems(state, action) {
      state.items = action.payload;
    },
    deleteItem(state, action) {
      const itemId = action.payload;
      state.items = state.items.filter((item) => item.id !== action.payload);
      state.totalItems--;
    },
  },
});

export const { setPage, setTotalItems, setItems, deleteItem } =
  listSlice.actions;

export default listSlice.reducer;
