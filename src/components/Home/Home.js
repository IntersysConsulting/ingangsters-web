import React from "react";
import NavBar from "../NavBars/GeneralNavBar/NavBar";
import Products from "./Products/Products";
import FastLoginButton from "../Checkout/FastLogin/FastLoginButton/FastLoginButton";
const Home = () => {
  return (
    <div>
      <NavBar />
      <Products />
    </div>
  );
};

export default Home;
