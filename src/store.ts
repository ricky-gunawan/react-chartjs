import { configureStore } from "@reduxjs/toolkit";
import censusReducer from "./models/censusSlice";

const store = configureStore({
  reducer: {
    census: censusReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
