import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../NavBars/GeneralNavBar/NavBar";
import Addresses from "./Addresses/Addresses";
import { connect } from "react-redux";
import Loading from "../UI/Loading/Loading";

const AccountDetails = ({ loading, user }) => {
  if (loading) {
    return (
      <React.Fragment>
        <NavBar />
        <div className="d-flex justify-content-center">
          <Loading />
        </div>
      </React.Fragment>
    );
  } else {
    if (user) {
      return (
        <React.Fragment>
          <NavBar />
          <div className="container my-3">
            <div className="row">
              <div className="col-12 col-md-6">WIP: user info here</div>
              <div className="col-12 col-md-6">
                <Addresses userData={user} />
              </div>
            </div>
            <div className="row">
              <div className="col-12">WIP: My orders here</div>
            </div>
          </div>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <NavBar />
          <div className="row">
            <div className="col-12 text-center pt-5">
              <h4>You're not signed</h4>
            </div>
            <div className="col-12">
              <div className="row d-flex justify-content-center py-3">
                <Link to="/login">
                  <button className="btn-lg btn-intersys btn-block">
                    Log in
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </React.Fragment>
      );
    }
  }
};

const mapStateToProps = state => ({
  loading: state.auth.loading,
  user: state.auth.user
});

export default connect(mapStateToProps)(AccountDetails);
