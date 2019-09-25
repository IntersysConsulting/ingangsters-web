import React from "react";
import NavBar from "../NavBars/GeneralNavBar/NavBar";
import Shadow from "../UI/Shadow/Shadow";
import Products from "./Products/Products";
import FastLoginButton from "../Checkout/FastLogin/FastLoginButton/FastLoginButton";
const Home = () => {
  return (
    <div>
      <NavBar />
      <FastLoginButton />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Shadow />
      <Products />
    </div>
  );
};

export default Home;
