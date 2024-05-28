import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import DetailHome from "../pages/DetailHome";
import { useState } from "react";
import dummyData from "../data/dummyData.json";
import { ExpensesProvider } from "../context/ExpensesContext";

const Router = () => {
  // const [expenses, setExpenses] = useState(dummyData);

  return (
    <ExpensesProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="DetailHome/:id" element={<DetailHome />} />
        </Routes>
      </BrowserRouter>
    </ExpensesProvider>
  );
};

export default Router;
