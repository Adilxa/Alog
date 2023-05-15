import React from "react";
import { Route, Routes } from "react-router-dom";
import CartPage from "../pages/cartPage/CartPage";
import HomePage from "../pages/homePage/HomePage";
import ForMans from "../pages/forMans/ForMans";
import DetailItem from "../components/DetalItem/DetailItem";
import UserProfilePage from "../pages/userPage/UserProfilePage";
import LoginPage from "../pages/login/LoginPage";
import RegistrationPage from "./../pages/register/RegisterPage";

const useRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/cart/:id" element={<CartPage />} />
      <Route path="/formans" element={<ForMans />} />
      <Route path="/formans/:id" element={<DetailItem />} />
      <Route path="/user/:id/:id" element={<DetailItem />} />
      <Route path="/registration" element={<RegistrationPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/user/:id" element={<UserProfilePage />} />
    </Routes>
  );
};

export default useRoutes;
