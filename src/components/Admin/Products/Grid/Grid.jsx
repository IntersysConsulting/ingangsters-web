import React from "react";
import Product from "../ProductCard/Card";
import "./Grid.css";
import { connect } from "react-redux";
import LoadingBall from "../../../UI/Loading/Loading";
import { fetchProducts } from "../../../../actions/creators/adminProducts";

export const ProductsGrid = ({
  items,
  loading,
  finishedFetch,
  fetchProducts,
  reload
}) => {
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
        path={"/admin/product/" + item._id}
        reload={reload}
      />
    ));
    return <div className="row adminProductGrid mt-4">{cards}</div>;
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
