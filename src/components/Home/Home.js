import React from "react";
import NavBar from "../NavBars/GeneralNavBar/NavBar";
import Products from "./Products/Products";
import Carousel from "../UI/Carousel/Carousel";

const Home = () => {
  return (
    <div>
      <NavBar />
      <Carousel />
      <Products />
    </div>
  );
};

export default Home;
