import React from "react";
import { Route, Routes } from "react-router-dom";
import CartPage from "../pages/cartPage/CartPage";
import HomePage from "../pages/homePage/HomePage";
import ForMans from "../pages/forMans/ForMans";

const useRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/formans" element={<ForMans />} />
    </Routes>
  );
};

export default useRoutes;
