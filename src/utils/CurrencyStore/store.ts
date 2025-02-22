"use client";

import { configureStore } from "@reduxjs/toolkit";
import currencyReducer from "./currency-slice";
import filterReducer from "./filter-slice"

export const store = configureStore({
  reducer: {
    currency: currencyReducer,
    filters: filterReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
