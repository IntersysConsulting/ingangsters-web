import React from "react";
import NavBar from "../NavBars/GeneralNavBar/NavBar";
import SearchProducts from "../Search/SearchedProducts";
import Loading from "../UI/Loading/Loading";
import SideBar from "../UI/SideBar/SideBar";
import { connect } from "react-redux";

const Search = ({ loading }) => {
  return (
    <div className="sidebar-full-height">
      <NavBar />
      {loading ? (
        <Loading />
      ) : (
        <div className="container-fluid h-100">
          <div className="row h-100">
            <SideBar />
            <div className="col-sm-12 col-md-8 col-lg-10">
              <SearchProducts />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  loading: state.products.loading
});

export default connect(mapStateToProps)(Search);
