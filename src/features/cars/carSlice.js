import { createSlice } from "@reduxjs/toolkit";
import carData from "../../carData";

const initialState = {
  carModels: carData,
  totalQuantity: 0,
  totalValue: 0,
  isLoading: true,
};

const carSlice = createSlice({
  name: "cars",
  initialState,
  reducers: {
    clearModels: (state) => {
      state.carModels = [];
    },
    removeModel: (state, { payload }) => {
      state.carModels = state.carModels.filter(
        (model) => model.id !== payload.id
      );
    },
    increase: (state, { payload }) => {
      const carModel = state.carModels.find((model) => model.id === payload.id);
      carModel.quantity = carModel.quantity + 1;
    },
    decrease: (state, { payload }) => {
      const carModel = state.carModels.find((model) => model.id === payload.id);
      carModel.quantity = carModel.quantity - 1;
    },
    calculateTotals: (state) => {
      let totalQuantity = 0;
      let totalValue = 0;
      state.carModels.forEach((model) => {
        totalQuantity += model.quantity;
        totalValue += model.quantity * model.price;
      });
      state.totalQuantity = totalQuantity;
      state.totalValue = totalValue;
    },
  },
});

export const { clearModels, removeModel, increase, decrease, calculateTotals } =
  carSlice.actions;
export default carSlice.reducer;
