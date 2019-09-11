import React from "react";
import NavBar from "../AdminNavBar/AdminNavBar";
import AdminTabBar from "../AdminTabBar/AdminTabBar";
import Shadow from "../Shadow/Shadow";
import { connect } from "react-redux";
import AdminNavBar from "../AdminNavBar/AdminNavBar";

const AdminPage = ({ adminOption }) => {
  return (
    <div>
      <AdminNavBar />
      <Shadow />
      <AdminTabBar />
      {adminOption == "Users" ? (
        <center>
          <h1>Users</h1>
        </center>
      ) : adminOption == "Products" ? (
        <center>
          <h1>Products</h1>
        </center>
      ) : (
        <center>
          <h1>Orders</h1>
        </center>
      )}
    </div>
  );
};

function mapStateToProps(state) {
  return {
    adminOption: state.adminTabBar.activeButton
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdminPage);
