import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  scrolled: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setScrolled: (state, action) => {
      state.scrolled = action.payload;
    },
  },
});

export const { setScrolled } = uiSlice.actions;
export default uiSlice.reducer;
