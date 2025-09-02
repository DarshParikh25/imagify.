import { configureStore } from "@reduxjs/toolkit";
import uiReducer from "../slice/uiSlice";
import trackerReducer from "../slice/trackerSlice";

export const store = configureStore({
  reducer: {
    ui: uiReducer,
    tracker: trackerReducer,
  },
});
