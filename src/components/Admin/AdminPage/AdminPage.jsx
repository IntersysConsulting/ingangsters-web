import React from "react";
import AdminTabBar from "../AdminTabBar/AdminTabBar";
import { connect } from "react-redux";
import AdminNavBar from "../../NavBars/AdminNavBar/AdminNavBar";
import AdminProducts from "../Products/index";
import UsersGrid from "../Users/AdminUsers";
import SideBar from "../../UI/SideBar/SideBar";

const AdminPage = ({ adminOption }) => {
  return (
    <div className="sidebar-full-height">
      <AdminNavBar />
      <div className="container-fluid h-100">
        <div className="row h-100">
          <SideBar />
          <div className="col-sm-12 col-md-8 col-lg-10">
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
      <AdminTabBar />
      {adminOption === "Users" ? (
        <div id="AdminPageContent">
          <UsersGrid />
        </div>
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    adminOption: state.adminTabBar.activeButton
  };
}

export default connect(mapStateToProps)(AdminPage);
