import React from "react";
import NavBar from "../NavBar/NavBar";
import Shadow from "../Shadow/Shadow";
import Products from "../Products/Products";

const Home = () => {
  return (
    <div>
      <NavBar />
      <Shadow />
      <h1>Home</h1>
      <Products />
    </div>
  );
};

export default Home;
