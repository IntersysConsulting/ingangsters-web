import React from "react";
import NavBar from "../NavBar/NavBar";
import Shadow from "../Shadow/Shadow";
import AdminProductsGrid from "../Admin/ProductsGrid/Grid";
const Home = () => {
  return (
    <div>
      <NavBar />
      <Shadow />
      <h1>Home</h1>
      <AdminProductsGrid />
    </div>
  );
};

export default Home;
