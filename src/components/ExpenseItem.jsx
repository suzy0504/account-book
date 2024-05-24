import React, { useEffect, useState } from "react";

const ExpenseItem = ({ expense }) => {
  return (
    <div>
      <button>
        <div>
          <span>{expense.date}</span>
          <span>
            {expense.item}-{expense.description}
          </span>
        </div>
        <span>{expense.amount}</span>
      </button>
    </div>
  );
};

export default ExpenseItem;
