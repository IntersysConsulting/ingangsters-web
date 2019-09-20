import React from "react";
import Product from "../ProductCard/Card";
import "./Grid.css";
import { connect } from "react-redux";
import LoadingBall from "../../../UI/Loading/Loading";
import { fetchProducts } from "../../../../actions/creators/adminProducts";

const ProductsGrid = ({ items, loading, finishedFetch, fetchProducts }) => {
  if (items.length === 0 && !loading && !finishedFetch) {
    fetchProducts(1);
  }
  if (loading) {
    return (
      <div className="row adminProductGrid">
        <LoadingBall />
      </div>
    );
  } else {
    const cards = items.map(item => (
      <Product
        {...item}
        key={item._id}
        onClick={"/admin/product/" + item._id}
      />
    ));
    return <div className="row adminProductGrid">{cards}</div>;
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
