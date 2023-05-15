import React, { useEffect } from "react";
import useSneakers from "../../hooks/useSneakers";
import Preloader from "../../components/preloader/Preloader";
import Header from "../../components/Header/Header";
import ChooseGender from "../../components/ChooseGender/ChooseGender";
import Slider from "../../components/Slider/Slider";
import Footer from "../../components/footer/Footer";

const HomePage = () => {
  const { isLoading, getSneakers, sneakers } = useSneakers();

  useEffect(() => {
    getSneakers();
  }, [getSneakers]);

  if (isLoading) return <Preloader />;
  return (
    <>
      <Header />
      <ChooseGender />
      <Slider />
      <Footer />
    </>
  );
};

export default HomePage;
