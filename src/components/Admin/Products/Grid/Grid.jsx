import React from "react";
import Product from "../ProductCard/Card";
import "./Grid.css";
import { connect } from "react-redux";
import LoadingBall from "../LoadingBall/LoadingBall";
import { fetchProducts } from "../../../../actions/creators/adminProducts";

const ProductsGrid = ({ items, loading, finishedFetch, fetchProducts }) => {
  if (items.length === 0 && !loading && !finishedFetch) {
    fetchProducts(7);
  }
  if (loading) {
    return (
      <div className="row">
        <LoadingBall />
      </div>
    );
  } else {
    const cards = items.map(item => (
      <Product
        {...item}
        key={item._id}
        onClick={() => {
          console.log("Clicked " + item._id);
        }}
      />
    ));
    return <div className="row">{cards}</div>;
  }
};

const mapStateToProps = state => ({
  items: state.adminProducts.list,
  loading: state.adminProducts.fetching,
  finishedFetch: state.adminProducts.finishedFetching
});

export default connect(
  mapStateToProps,
  { fetchProducts }
)(ProductsGrid);
