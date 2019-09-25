import React from "react";
import NavBar from "../NavBars/GeneralNavBar/NavBar";
import Shadow from "../UI/Shadow/Shadow";
import Products from "./Products/Products";
import FastLoginModal from "../Checkout/FastLogin/FastLoginModal/FastLoginModal";
const Home = () => {
  return (
    <div>
      <NavBar />
      <FastLoginModal />
      {/* <Shadow />
      <Products /> */}
    </div>
  );
};

export default Home;
