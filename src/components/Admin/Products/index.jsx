import React from "react";
import Grid from "./Grid/Grid";
import Paginator from "./Paginator/Paginator";
import { connect } from "react-redux";
import { fetchProducts } from "../../../actions/creators/adminProducts";
import Shadow from "../../Shadow/Shadow";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
const AdminProducts = ({
  currentPage,
  totalItems,
  itemsPerPage,
  fetchProducts
}) => {
  return (
    <div>
      <Shadow />
      <br />
      <Grid />
      <Paginator
        currentPage={currentPage}
        totalItems={totalItems}
        itemsPerPage={itemsPerPage}
        navigateFunction={fetchProducts}
      />
      <br />
      <Link to="/admin/product/new">
        <Button variant="primary">New product</Button>
      </Link>
      <br />
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
