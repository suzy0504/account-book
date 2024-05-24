import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import dummyData from "../data/dummyData.json";
import ExpenseList from "./ExpenseList";
import Month from "./Month";

const ExpenseContainer = () => {
  const [expenses, setExpense] = useState(dummyData);

  console.log(dummyData);

  return (
    <div>
      <ExpenseForm setExpense={setExpense} />
      <Month />
      <ExpenseList expenses={expenses} />
    </div>
  );
};

export default ExpenseContainer;
