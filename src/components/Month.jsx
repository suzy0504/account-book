import React from "react";
import styled from "styled-components";

const MonthBox = styled.div`
  background-color: #bb8c94;
  border-radius: 10px;
  padding: 20px;
  display: grid;
  justify-items: center;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  gap: 20px;
`;

const MonthButton = styled.button`
  background-color: white;
  border-radius: 10px;
  height: 80px;
  width: 110px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  &:hover {
    background-color: #be6674;
    color: white;
  }
`;

const Month = () => {
  return (
    <div>
      <MonthBox>
        {[
          "1월",
          "2월",
          "3월",
          "4월",
          "5월",
          "6월",
          "7월",
          "8월",
          "9월",
          "10월",
          "11월",
          "12월",
        ].map((month, index) => (
          <MonthButton key={index}>{month}</MonthButton>
        ))}
      </MonthBox>
    </div>
  );
};

export default Month;
