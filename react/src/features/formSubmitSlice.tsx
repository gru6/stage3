import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Icards } from "../components/Form/Form";

interface FormState {
  formValues: Icards[];
}

const initialState: FormState = {
  formValues: [],
};

export const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    setFormValues: (state, action: PayloadAction<Icards[]>) => {
      state.formValues = action.payload;
    },
    addFormValue: (state, action: PayloadAction<Icards>) => {
      state.formValues.push(action.payload);
    },
  },
});

export const { setFormValues, addFormValue } = formSlice.actions;
export default formSlice.reducer;
