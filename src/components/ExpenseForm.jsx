import React from "react";
import styled from "styled-components";

const FormBox = styled.div`
  background-color: #be6674;
  display: flex;
  border-radius: 10px;
  color: white;
  font-size: 20px;
  padding: 20px;
`;

const ExpenseForm = ({ setExpense }) => {
  const onSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const date = formData.get("date");
    const item = formData.get("item");
    const amount = formData.get("amount");
    const description = formData.get("description");

    // if 로 입력창 검증하기

    const nextExpense = {
      id: crypto.randomUUID(),
      date,
      item,
      amount,
      description,
    };

    setExpense((prevExpenses) => [...prevExpenses, nextExpense]);

    console.log(nextExpense);

    e.target.reset();
  };

  return (
    <FormBox>
      <form onSubmit={onSubmit}>
        날짜
        <input name="date" type="date" placeholder="YYYY-MM-DD" />
        항목
        <input name="item" type="text" />
        금액
        <input name="amount" type="number" />
        내용
        <input name="description" type="text" />
        <button type="sumit">저장</button>
      </form>
    </FormBox>
  );
};

export default ExpenseForm;
