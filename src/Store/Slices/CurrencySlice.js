import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const currencySlice = createSlice({
  name: "currency",
  initialState: {
    loading: false,
    data: null,
    error: null,
  },
  reducers: {
    setData: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    setLoading: (state) => {
      state.loading = true;
    },
    setError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { setData, setLoading, setError } = currencySlice.actions;

export const fetchCurrencyData = () => async (dispatch) => {
  dispatch(setLoading());
  try {
    const response = await axios.get(
      "https://finans.truncgil.com/v3/today.json"
    );
    dispatch(setData(response.data));
  } catch (error) {
    dispatch(setError(error));
  }
};

export default currencySlice.reducer;
