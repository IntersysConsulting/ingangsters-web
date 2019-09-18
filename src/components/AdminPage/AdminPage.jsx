import React from "react";
import AdminTabBar from "../AdminTabBar/AdminTabBar";
import Shadow from "../Shadow/Shadow";
import { connect } from "react-redux";
import AdminNavBar from "../AdminNavBar/AdminNavBar";
import AdminProducts from "../Admin/Products/index";

const AdminPage = ({ adminOption }) => {
  return (
    <div>
      <AdminNavBar />
      <Shadow />
      <AdminTabBar />
      <br />
      <br />

      {adminOption == "Users" ? (
        <center>
          <p>Users</p>
        </center>
      ) : adminOption == "Products" ? (
        <center>
          <p>Products</p>
          <AdminProducts></AdminProducts>
        </center>
      ) : (
        <center>
          <p>Orders</p>
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
