import React from "react";
import NavBar from "../NavBar/NavBar";
import Shadow from "../Shadow/Shadow";
import AdminProducts from "../Admin/Products";
const Home = () => {
  return (
    <div>
      <NavBar />
      <Shadow />
      <h1>Home</h1>
      <AdminProducts />
    </div>
  );
};

export default Home;
