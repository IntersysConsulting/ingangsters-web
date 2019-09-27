import React from "react";
import NavBar from "../NavBars/GeneralNavBar/NavBar";
import Products from "./Products/Products";
import FastLoginModal from "../Checkout/FastLogin/FastLoginModal/FastLoginModal";
const Home = () => {
  return (
    <div>
      <NavBar />
      <Products />
    </div>
  );
};

export default Home;
