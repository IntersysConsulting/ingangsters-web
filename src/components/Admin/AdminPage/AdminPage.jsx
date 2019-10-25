import React from "react";
import AdminTabBar from "../AdminTabBar/AdminTabBar";
import { connect } from "react-redux";
import AdminNavBar from "../../NavBars/AdminNavBar/AdminNavBar";
import AdminProducts from "../Products/index";
import UsersGrid from "../Users/AdminUsers";
import OrdersList from "../Orders";
import SideBar from "../../UI/SideBar/SideBar";
import { fetchProducts } from "../../../actions/creators/adminProducts";

const AdminPage = ({ adminOption, fetchProducts }) => {
  return (
    <div>
      <AdminNavBar />
      <AdminTabBar />
      {adminOption === "Users" ? (
        <div id="AdminUsersContent">
          <UsersGrid />
        </div>
      ) : adminOption === "Products" ? (
        <div id="AdminProductsContent" className="container-fluid">
          <div className="row">
            <SideBar
              isAdmin={true}
              filter={() => {
                fetchProducts(1);
              }}
            />
            <div className="col-sm-12 col-md-9 col-lg-10">
              <AdminProducts />
            </div>
          </div>
        </div>
      ) : (
        <div id="AdminPageContent">
          <OrdersList />
        </div>
      )}
    </div>
  );
};

function mapStateToProps(state) {
  return {
    adminOption: state.adminTabBar.activeButton + "!"
  };
}

export default connect(
  mapStateToProps,
  { fetchProducts }
)(AdminPage);
