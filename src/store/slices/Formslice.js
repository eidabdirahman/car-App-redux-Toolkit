import { createSlice } from "@reduxjs/toolkit";
import { addCar } from "./CarsSlice";

const formSlice = createSlice({
  name: "form",
  initialState: {
    name: "",
    cost: 0
  },
  reducers: {
    ChangeName (state, action) {
      state.name = action.payload;
    },
    ChangeCost(state, action)  {
      state.cost = action.payload;
    }
  },
 extraReducers (builder){
  builder.addCase(addCar, (state, action) => {
    state.name = '';
    state.cost = 0;

  })
 }
});

export const { ChangeName, ChangeCost } = formSlice.actions;
export const FormReducer = formSlice.reducer;
