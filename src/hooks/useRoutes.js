import React from "react";
import { Route, Routes } from "react-router-dom";
import CartPage from "../pages/cartPage/CartPage";
import HomePage from "../pages/homePage/HomePage";
import ForMans from "../pages/forMans/ForMans";
import DetailItem from "../components/DetalItem/DetailItem";
import UserProfilePage from "../pages/userPage/UserProfilePage";
import LoginPage from "../pages/login/LoginPage";
import RegistrationPage from "./../pages/register/RegisterPage";
import ForWomans from "../pages/foeWomans/ForWomans";
import DetailItemWomans from "../components/detailItemWomans/DetailItemWoman";

const useRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/cart/:id" element={<CartPage />} />
      <Route path="/formans" element={<ForMans />} />
      <Route path="/forwomans" element={<ForWomans />} />
      <Route path="/formans/:id" element={<DetailItem />} />
      <Route path="/forwomans/:id" element={<DetailItemWomans />} />
      <Route path="/user/:id/:id" element={<DetailItem />} />
      <Route path="/registration" element={<RegistrationPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/user/:id" element={<UserProfilePage />} />
    </Routes>
  );
};

export default useRoutes;
