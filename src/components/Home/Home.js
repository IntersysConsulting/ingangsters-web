import React from "react";
import NavBar from "../NavBars/GeneralNavBar/NavBar";
import Shadow from "../UI/Shadow/Shadow";
import Products from "./Products/Products";
import FastLoginButton from "../Checkout/FastLogin/FastLoginButton/FastLoginButton";
import FastLoginModal from "../Checkout/FastLogin/FastLoginModal/FastLoginModal";
const Home = () => {
  return (
    <div>
      <NavBar />
      <FastLoginButton />
      <FastLoginModal />
      {/* <Shadow />
      <Products /> */}
    </div>
  );
};

export default Home;
