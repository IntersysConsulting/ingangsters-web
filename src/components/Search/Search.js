import React from "react";
import NavBar from "../NavBars/GeneralNavBar/NavBar";
import SearchProducts from "../Search/SearchedProducts";
import Loading from "../UI/Loading/Loading";
import { connect } from "react-redux";

const Search = ({ loading }) => {
  return (
    <div>
      <NavBar />
      {loading ? <Loading /> : <SearchProducts />}
    </div>
  );
};

const mapStateToProps = state => ({
  loading: state.products.loading
});

export default connect(mapStateToProps)(Search);
