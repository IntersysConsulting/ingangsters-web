import React, { Fragment, useEffect } from "react";
import ProductCard from "./ProductCard";
import { connect } from "react-redux";
import { getProducts } from "../../../actions/creators/product";
import "./Products.css";

const Products = ({ getProducts, product: { products, loading } }) => {
  useEffect(() => {
    getProducts();
  }, [getProducts]);
  console.log(products);
  return loading ? (
    <p>CARGANDO.....</p>
  ) : (
    <Fragment>
      <div className="container-fluid">
        <h1>Products</h1>
        <div className="row">
          {products.map((product, i) => (
            <div
              key={i}
              className="col-xs-12 col-sm-12 col-md-6 col-lg-4 row-eq-height"
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </Fragment>
  );
};

const mapStateToProps = state => ({
  product: state.products
});

export default connect(
  mapStateToProps,
  { getProducts }
)(Products);
