import React, { Fragment, useEffect } from "react";
import ProductCard from "./ProductCard";
import Loading from "../../UI/Loading/Loading";
import { connect } from "react-redux";
import { getProducts } from "../../../actions/creators/products";
import "./Products.css";

const Products = ({ getProducts, product: { products, loading } }) => {
  useEffect(() => {
    getProducts();
  }, [getProducts]);

  return loading ? (
    <Fragment>
      <div className="d-flex justify-content-center">
        <Loading />
      </div>
    </Fragment>
  ) : (
    <div className="container-fluid">
      <h1 className="products-title my-3">Look our catalog!</h1>
      <div className="row">
        {products.map(product => (
          <div
            key={`product-${product._id}`}
            className="col-xs-12 col-sm-12 col-md-6 col-lg-4 row-eq-height"
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  product: state.products
});

export default connect(
  mapStateToProps,
  { getProducts }
)(Products);
