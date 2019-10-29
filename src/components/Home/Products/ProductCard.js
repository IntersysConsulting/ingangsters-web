import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { FaCartPlus } from "react-icons/fa";
import "./ProductCard.css";
import { addProductToCart } from "../../Cart/ProductsManager";
import { uploadAndUpdateCart } from "../../../actions/creators/cart";
import { prettifyCents } from "../../../utils/utils";
import { createNotificationSuccess } from "../../../actions/creators/notification";
import { idNotificationGenerator, charCount } from "../../../utils/idGenerator";

// import { useSelector } from "react-redux";

function executeFunctionsAfterAddProduct(
  product,
  productID,
  uploadAndUpdateCart,
  createNotificationSuccess
) {
  addProductToCart(product, productID, uploadAndUpdateCart);
  createNotificationSuccess(
    idNotificationGenerator(),
    "Product added",
    charCount(product.name) + " added to the cart."
  );
}

const ProductCard = ({
  product,
  uploadAndUpdateCart,
  createNotificationSuccess
}) => {
  return (
    <div className="container-fluid row-eq-height">
      <div className="row my-1 product-card highlight">
        <div className="col-12 col-sm-12 col-md-4 col-lg-5 text-center vertical-center">
          <Link to={`/details/${product._id}`}>
            <img
              src={product.image}
              alt={product.name}
              className="img-fluid img-resize py-2"
            />
          </Link>
        </div>
        <div className="col-12 col-sm-12 col-md-8 col-lg-7 mb-md-3 content-center">
          <Link to={`/details/${product._id}`} className="title-link">
            <div className="product-title mb-md-2">
              <p className="line-clamp title-link">{product.name}</p>
            </div>
          </Link>
          <div className="row">
            <div className="col-xl-3 col-lg-12 col-md-12 col-sm-12">
              <p className="price">{prettifyCents(product.price)}</p>
            </div>
            <div className="col-xl-8 col-lg-12 offset-xl-1 col-md-12 col-sm-12">
              <button
                type="button"
                className="btn btn-product-card btn-block"
                onClick={() => {
                  executeFunctionsAfterAddProduct(
                    product,
                    product._id,
                    uploadAndUpdateCart,
                    createNotificationSuccess
                  );
                }}
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

export default connect(
  null,
  { uploadAndUpdateCart, createNotificationSuccess }
)(ProductCard);
