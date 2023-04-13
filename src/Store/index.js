import { configureStore } from "@reduxjs/toolkit";
import currencySlice from "./Slices/CurrencySlice";

export default configureStore({
  reducer: {
    currency: currencySlice,
  },
});
