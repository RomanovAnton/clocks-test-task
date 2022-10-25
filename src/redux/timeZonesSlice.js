import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchTimeZones = createAsyncThunk(
  "timeZone/fetchTimeZones",
  async function (_, { rejectWithValue }) {
    try {
      const response = await fetch(
        "https://1299e8ea-6a09-443d-8ef0-f59af289a1c3.mock.pstmn.io/timezones"
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
