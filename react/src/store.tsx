import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/counterSlice";
import searchReducer from "./features/counter/searchSlice";
import { apiSlice } from "./features/apiSlice";

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

const store = configureStore({
  reducer: {
    counter: counterReducer,
    search: searchReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
export default store;
