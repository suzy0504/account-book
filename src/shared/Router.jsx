import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import DetailHome from "../pages/DetailHome";
import { useState } from "react";
import dummyData from "../data/dummyData.json";
import { ExpensesContext } from "../context/ExpensesContext";

const Router = () => {
  const [expenses, setExpenses] = useState(dummyData);

  return (
    <BrowserRouter>
      <ExpensesContext.Provider value={{ expenses, setExpenses }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="DetailHome/:id" element={<DetailHome />} />
        </Routes>
      </ExpensesContext.Provider>
    </BrowserRouter>
  );
};

export default Router;
