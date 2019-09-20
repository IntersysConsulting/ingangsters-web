import React from "react";
import { connect } from "react-redux";
import PlusLessButtons from "./PlusLessButtons/PlusLessButtons";
import { deleteProductFromCart } from "../ProductsManager";
import { uploadAndUpdateCart } from "../../../actions/creators/cart";
import "./SingleProduct.css";
import { FaRegTrashAlt } from "react-icons/fa";

const SingleProduct = ({ data, uploadAndUpdateCart }) => {
  return (
    <div className="col-12 item-cell">
      <div className="row">
        <div className="col-4 col-md-3 py-1 my-auto">
          <img
            className="img-fluid image-max"
            alt={data.name}
            src={data.image}
          />
        </div>
        <div className="col-5 col-md-7 my-auto text-center">
          <div className="line-clamp-cart name-text">{data.name}</div>
          <div className="row justify-content-center pt-3 pb-2">
            <PlusLessButtons data={data} />
          </div>
        </div>
        <div className="col-3 col-md-2 my-auto text-center">
          <div className="col-12 text-center">
            <h5 className="priceColor">${data.price / 100}</h5>
          </div>
          <div className="col-12 pt-4">
            <button
              className="btn btn-md btn-intersys-cart"
              onClick={() => {
                deleteProductFromCart(data._id, uploadAndUpdateCart);
              }}
            >
              <FaRegTrashAlt />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({});

export default connect(
  mapStateToProps,
  { uploadAndUpdateCart }
)(SingleProduct);
