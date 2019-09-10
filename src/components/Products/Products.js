import React, { Fragment, useEffect } from "react";
import ProductCard from "./ProductCard";
import { connect } from "react-redux";
import { getProducts } from "../../actions/creators/product";

const Products = ({ getProducts, product: { products, loading } }) => {
  useEffect(() => {
    getProducts();
  }, [getProducts]);

  return loading ? (
    <p>CARGANDO.....</p>
  ) : (
    <Fragment>
      <h1>Products</h1>
      <div className="row">
        {products.map((product, i) => (
          <div key={i} className="col-lg-3 col-sm-6 col-xs-12">
            <ProductCard product={product} />
          </div>
        ))}
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
