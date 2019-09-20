import React, { useEffect } from "react";
import ProductCard from "./ProductCard";
import Loading from "../../UI/Loading/Loading";
import { connect } from "react-redux";
import { getProducts } from "../../../actions/creators/product";
import "./Products.css";

const Products = ({ getProducts, product: { products, loading } }) => {
  useEffect(() => {
    getProducts();
  }, [getProducts]);

  return loading ? (
    <div className="offset-5 col-2">
      <Loading />
    </div>
  ) : (
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
  );
};

const mapStateToProps = state => ({
  product: state.products
});

export default connect(
  mapStateToProps,
  { getProducts }
)(Products);
