import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  scrolled: false,
  activeLink: "Home",
  isDark: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setScrolled: (state, action) => {
      state.scrolled = action.payload;
    },

    setActiveLink: (state, action) => {
      state.activeLink = action.payload;
    },

    setIsDark: (state) => {
      state.isDark = !state.isDark;
    },
  },
});

export const { setScrolled, setActiveLink, setIsDark } = uiSlice.actions;
export default uiSlice.reducer;
