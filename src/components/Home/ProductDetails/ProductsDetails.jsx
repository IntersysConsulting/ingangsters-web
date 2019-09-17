import React from "react";
import NavBar from "../../NavBar/NavBar";
import Shadow from "../../Shadow/Shadow";
import "./ProductDetails.css";

const ProductDetails = props => {
  return (
    <div>
      <NavBar />
      <Shadow />
      <div className="container mt-5">
        <div className="col-12 product-container">
          <div className="row py-4">
            <div className="col-12 col-sm-12 col-md-4 col-lg-3 my-auto text-center">
              <img
                className="img-fluid"
                alt="product_image"
                src="https://www.freepngimg.com/static/img/cat/sunglasses.png"
              ></img>
            </div>
            <div className="col-md-1" />
            <div className="col-12 col-sm-12 col-md-7 col-lg-7 px-4">
              <div className="row">
                <div className="col-9">
                  <h3>Rayban Glasses</h3>
                </div>
                <div className="col-3">
                  <h5 className="price text-center"> 109.99</h5>
                </div>
              </div>
              <div className="row">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 mt-4">
          <div className="row">
            <div className="col-3 col-sm-3 col-md-7" />
            <div className="col-6 col-sm-6 col-md-5">
              <button className="btn-lg btn-intersys btn-block">
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
