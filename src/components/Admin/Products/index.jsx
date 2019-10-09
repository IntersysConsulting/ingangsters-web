import React from "react";
import Grid from "./Grid/Grid";
import Paginator from "./Paginator/Paginator";
import { connect } from "react-redux";
import { fetchProducts } from "../../../actions/creators/adminProducts";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "./AdminProducts.css";
import Filters from "./Filters/Filters";

const AdminProducts = ({
  currentPage,
  totalItems,
  itemsPerPage,
  fetchProducts
}) => {
  return (
    <div>
      <br />
      <Filters />
      <Grid />
      <div className="bottomWrapper">
        <Paginator
          currentPage={currentPage}
          totalItems={totalItems}
          itemsPerPage={itemsPerPage}
          navigateFunction={fetchProducts}
        />
        <Link to="/admin/product/new" className="newProductWrapper">
          <Button variant="primary">New product</Button>
        </Link>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  currentPage: state.adminProducts.currentPage,
  totalItems: state.adminProducts.totalItems,
  itemsPerPage: state.adminProducts.itemsPerPage
});

export default connect(
  mapStateToProps,
  { fetchProducts }
)(AdminProducts);
