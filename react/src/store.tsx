import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./features/searchSlice";
import formReducer from "./features/formSubmitSlice";
import { apiSlice } from "./features/apiSlice";

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

const store = configureStore({
  reducer: {
    search: searchReducer,
    form: formReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
export default store;
