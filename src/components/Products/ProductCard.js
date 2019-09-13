import React from "react";
import { Link } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";
import "./ProductCard.css";

const ProductCard = ({ product }) => {
  const addToCart = () => {
    alert("Added to cart");
  };

  return (
    <div className="container-fluid">
      <div className="row m-1 product-card highlight">
        <div className="col-4 text-center vertical-center">
          <Link to={`/details/${product._id}`}>
            <img
              src={product.image}
              alt={product.name}
              className="img-fluid py-2"
              style={{ maxHeight: "100%", maxWidth: "100%", height: "auto" }}
            />
          </Link>
        </div>
        <div className="col-8 content-center">
          <Link to={`/details/${product._id}`} className="title-link">
            <div className="product-title">
              <p className="line-clamp title-link">{product.name}</p>
            </div>
          </Link>
          <div className="row">
            <div className="col-lg-3 col-md-12 col-sm-12">
              <p className="price">${product.price}</p>
            </div>
            <div className="col-lg-9 col-md-12 col-sm-12">
              <button
                type="button"
                className="btn btn-success btn-block"
                onClick={addToCart}
              >
                Add <FaCartPlus />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
