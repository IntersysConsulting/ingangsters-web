import React, { Fragment } from "react";
import NavBar from "../NavBars/GeneralNavBar/NavBar";
import SearchProducts from "../Search/SearchedProducts";
import Loading from "../UI/Loading/Loading";
import SideBar from "../UI/SideBar/SideBar";
import { getFilteredProducts } from "../../actions/creators/products";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

const Search = ({ loading, history, getFilteredProducts }) => {
  const search = history.location.search.slice(1);
  return (
    <Fragment>
      <NavBar />
      {loading ? (
        <Loading />
      ) : (
        <div className="container-fluid">
          <div className="row">
            <SideBar
              isAdmin={false}
              filter={() => {
                getFilteredProducts(search);
              }}
            />
            <div className="col-sm-12 col-md-8 col-lg-10">
              <SearchProducts />
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};

const mapStateToProps = state => ({
  loading: state.products.loading
});

export default connect(
  mapStateToProps,
  { getFilteredProducts }
)(withRouter(Search));
