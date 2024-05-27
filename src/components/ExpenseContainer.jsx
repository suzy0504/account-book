import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import ExpenseList from "./ExpenseList";
import styled from "styled-components";
import Month from "./Month";
import { SelectedMonthContext } from "../context/SelectedMonthContext";

const ItemBox = styled.div`
  background-color: #e8b19d;
  padding: 20px 20px 10px 20px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 20px;
`;

const ExpenseContainer = () => {
  const [selectedMonth, setSelectedMonth] = useState(() => {
    return localStorage.getItem("selectedMonth") || "1월";
  });

  return (
    <div>
      <ExpenseForm />
      <Month
        selectedMonth={selectedMonth}
        setSelectedMonth={setSelectedMonth}
      />
      <ItemBox>
        <ExpenseList selectedMonth={selectedMonth} />
      </ItemBox>
    </div>
  );
};

export default ExpenseContainer;
