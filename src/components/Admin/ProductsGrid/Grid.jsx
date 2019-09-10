import React from "react";
import Product from "./ProductCard/Card";
import "./Grid.css";
import { connect } from "react-redux";
import LoadingBall from "./LoadingBall/LoadingBall";

const ProductsGrid = ({ items, loading }) => {
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
  loading: state.adminProducts.fetching
});

export default connect(
  mapStateToProps,
  {}
)(ProductsGrid);
