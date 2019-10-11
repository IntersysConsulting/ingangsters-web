import React from "react";
import { connect } from "react-redux";
import ProductCard from "../Home/Products/ProductCard";
import { MdSearch } from "react-icons/md";
import "./Search.css";

const SearchedProducts = ({ results }) => {
  const searchMessage = results => {
    if (results.length > 0) {
      return (
        <div className=" text-center mt-5 alert alert-info-search" role="alert">
          <p className="result-text my-auto">{`Found ${results.length} related products`}</p>
        </div>
      );
    }
    if (results.length < 1) {
      return (
        <div className="container-fluid text-center mt-5">
          <MdSearch size={80} id="search-icon" className="warning-search" />
          <h3 className="mt-3 warning-search">SEARCH WITHOUT NO RESULTS!</h3>
        </div>
      );
    }
  };

  return (
    <div>
      {searchMessage(results)}
      <div className="row">
        {results.map(product => (
          <div
            key={`result-${product._id}`}
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
  results: state.products.searchProducts
});

export default connect(mapStateToProps)(SearchedProducts);
