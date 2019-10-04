import React from "react";
import AdminTabBar from "../AdminTabBar/AdminTabBar";
import { connect } from "react-redux";
import AdminNavBar from "../../NavBars/AdminNavBar/AdminNavBar";
import AdminProducts from "../Products/index";

const AdminPage = ({ adminOption }) => {
  return (
    <div>
      <AdminNavBar />
      <AdminTabBar />
      {adminOption === "Users" ? (
        <div id="AdminPageContent">
          <center>
            <p>Users</p>
          </center>
        </div>
      ) : adminOption === "Products" ? (
        <div id="AdminPageContent">
          <AdminProducts />
        </div>
      ) : (
        <div id="AdminPageContent">
          <center>
            <p>Orders</p>
          </center>
        </div>
      )}
    </div>
  );
};

function mapStateToProps(state) {
  return {
    adminOption: state.adminTabBar.activeButton
  };
}

export default connect(mapStateToProps)(AdminPage);
