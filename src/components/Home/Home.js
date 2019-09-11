import React from "react";
import NavBar from "../NavBar/NavBar";
import Shadow from "../Shadow/Shadow";
import AdminProductsGrid from "../Admin/ProductsGrid/Grid";
import { connect } from "react-redux";
import { endFetchProducts } from "../../actions/creators/adminProducts";
import Button from "react-bootstrap/Button";
const Home = ({ state, finishFetchProducts }) => {
  return (
    <div>
      <NavBar />
      <Shadow />
      <h1>Home</h1>
      <AdminProductsGrid />
    </div>
  );
};

const mapStateToProps = state => state;
const mapDispatchToProps = dispatch => ({
  finishFetchProducts() {
    dispatch(endFetchProducts());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
