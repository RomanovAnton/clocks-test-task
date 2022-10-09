import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchTimeZones = createAsyncThunk(
  "timeZone/fetchTimeZones",
  async function (_, { rejectWithValue }) {
    try {
      const response = await fetch(
        "https://633c6ee9f11701a65f762100.mockapi.io/clocks/items"
      );

      if (!response.ok) {
        throw new Error("Server error");
      }
      const data = response.json();

      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

const timeZonesSlice = createSlice({
  name: "timeZones",
  initialState: {
    timeZones: [],
    status: "",
    erros: "",
  },
  extraReducers: {
    [fetchTimeZones.pending]: (state) => {
      state.status = "loading";
    },

    [fetchTimeZones.fulfilled]: (state, actions) => {
      state.status = "resolved";
      state.timeZones = actions.payload;
    },

    [fetchTimeZones.rejected]: (state, actions) => {
      state.status = "rejected";
      state.erros = actions.payload;
    },
  },
});

export default timeZonesSlice.reducer;
