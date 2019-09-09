import React from "react";
import NavBar from "../NavBar/NavBar";
import AdminTabBar from "../AdminTabBar/AdminTabBar";
import Shadow from "../Shadow/Shadow";
const Home = () => {
  return (
    <div>
      <NavBar />
      <Shadow />
      <h1>Home</h1>
      <AdminTabBar />
    </div>
  );
};

export default Home;
