import { createSlice } from "@reduxjs/toolkit";
import dummyData from "../../data/dummyData.json";

// const expenses = (state = initialState, action) => {
//   switch (action.type) {
//     default:
//       return state;
//   }
// };

const initialState = dummyData;
const expensesSlice = createSlice({
  name: "expenses",
  initialState,
  reducers: {
    setExpenses: (state, action) => {
      return action.payload;
    },
  },
});

export const { setExpenses } = expensesSlice.actions;
export default expensesSlice.reducer;
