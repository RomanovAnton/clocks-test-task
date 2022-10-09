import { configureStore } from "@reduxjs/toolkit";
import timeZonesSlice from "./timeZonesSlice";

const store = configureStore({
  reducer: {
    timeZones: timeZonesSlice,
  },
});

export default store;
