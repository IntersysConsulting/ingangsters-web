import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { FaCartPlus } from "react-icons/fa";
import "./ProductCard.css";
import { addProductToCart } from "../../Cart/ProductsManager";
import { uploadAndUpdateCart } from "../../../actions/creators/cart";
import { prettifyCents } from "../../../utils/utils";
import { createNotificationSuccess } from "../../../actions/creators/notification";
import { idGenerator } from "../../../utils/idGenerator";

// import { useSelector } from "react-redux";

function executeFunctionsAferAddProduct(
  product,
  productID,
  uploadAndUpdateCart,
  createNotificationSuccess
) {
  addProductToCart(product, productID, uploadAndUpdateCart);
  createNotificationSuccess(
    idGenerator(),
    "Product added",
    product.name + " added to the cart."
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
        <div className="col-12 col-sm-12 col-md-8 col-lg-7 content-center">
          <Link to={`/details/${product._id}`} className="title-link">
            <div className="product-title">
              <p className="line-clamp title-link">{product.name}</p>
            </div>
          </Link>
          <div className="row">
            <div className="col-lg-3 col-md-12 col-sm-12">
              <p className="price">{prettifyCents(product.price)}</p>
            </div>
            <div className="col-lg-8 offset-lg-1 col-md-12 col-sm-12">
              <button
                type="button"
                className="btn btn-product-card btn-block"
                onClick={() => {
                  //WIP: Show animation or alerto to user, "Product added", it can happend in uploadAndUpdateCart
                  executeFunctionsAferAddProduct(
                    product,
                    product._id,
                    uploadAndUpdateCart,
                    createNotificationSuccess
                  );
                  //addProductToCart(product, product._id, uploadAndUpdateCart);
                }}
              >
                Add <FaCartPlus />
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* {console.log(useSelector(state => state.createNotificationSuccess))} */}
    </div>
  );
};

export default connect(
  null,
  { uploadAndUpdateCart, createNotificationSuccess }
)(ProductCard);
