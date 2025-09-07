import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loggedIn: true,
};

const trackerSlice = createSlice({
  name: "tracker",
  initialState,
  reducers: {
    setLoggedIn: (state, action) => {
      state.loggedIn = action.payload;
    },
  },
});

export const { setLoggedIn } = trackerSlice.actions;
export default trackerSlice.reducer;
