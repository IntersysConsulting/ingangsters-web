import React from "react";
import NavBar from "../NavBar/NavBar";
import Shadow from "../Shadow/Shadow";
import Products from "../Products/Products";

const Home = () => {
  const mockProducts = [
    {
      name: "Headsets",
      cost: 109.99,
      img: "https://elcopcb.online/photos/product/4/176/4.jpg"
    },
    {
      name: "iPhone",
      cost: 500.25,
      img:
        "https://support.apple.com/library/content/dam/edam/applecare/images/en_US/homepod/watch-product-lockup-callout.png"
    },
    {
      name: "Camera",
      cost: 751.12,
      img:
        "https://in.canon/media/image/2018/05/03/642e7bbeae5741e3b872e082626c0151_eos6d-mkii-ef-24-70m-l.png"
    },
    {
      name: "Camera 2 ",
      cost: 1000.12,
      img:
        "https://in.canon/media/image/2018/05/03/642e7bbeae5741e3b872e082626c0151_eos6d-mkii-ef-24-70m-l.png"
    }
  ];

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
