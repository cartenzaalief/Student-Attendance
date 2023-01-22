import { configureStore } from "@reduxjs/toolkit";
import { usersReducer } from "./usersReducer";

export const globalStore = configureStore({
  reducer: {
    usersReducer,
  },
});
