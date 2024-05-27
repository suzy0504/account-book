import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import dummyData from "../data/dummyData.json";
import ExpenseList from "./ExpenseList";

import styled from "styled-components";
import Month from "./Month";

const ItemBox = styled.div`
  background-color: #e8b19d;
  padding: 20px 20px 10px 20px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 20px;
`;

const ExpenseContainer = ({ expenses, setExpenses }) => {
  // const [expenses, setExpense] = useState(dummyData);
  const [selectedMonth, setSelectedMonth] = useState(() => {
    return localStorage.getItem("selectedMonth") || "1월";
  });

  return (
    <div>
      <ExpenseForm setExpenses={setExpenses} />
      <Month
        selectedMonth={selectedMonth}
        setSelectedMonth={setSelectedMonth}
      />
      <ItemBox>
        <ExpenseList
          expenses={expenses}
          setExpenses={setExpenses}
          selectedMonth={selectedMonth}
        />
      </ItemBox>
    </div>
  );
};

export default ExpenseContainer;
