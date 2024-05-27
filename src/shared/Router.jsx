import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import DetailHome from "../pages/DetailHome";
import { useState } from "react";
import dummyData from "../data/dummyData.json";

const Router = () => {
  const [expenses, setExpenses] = useState(dummyData);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Home expenses={expenses} setExpenses={setExpenses} />}
        />
        <Route
          path="DetailHome/:id"
          element={<DetailHome expenses={expenses} setExpenses={setExpenses} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
