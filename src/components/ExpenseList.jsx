import React from "react";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = ({ expenses }) => {
  return (
    <div>
      {expenses.map((expense) => (
        <div key={expense.id}>
          <ExpenseItem expense={expense} />
        </div>
      ))}
    </div>
  );
};

export default ExpenseList;
