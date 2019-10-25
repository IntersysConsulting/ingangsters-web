import React from "react";
import UserGrid from "./UserGrid/UserGrid";
import Paginator from "../../UI/Paginator/Paginator";
import { connect } from "react-redux";
import { fetchAdminUsers } from "../../../actions/creators/adminUsers";
import Button from "react-bootstrap/Button";
import "../Products/AdminProducts.css";
import AdminSearchBar from "../AdminSearchBar/AdminSearchBar";
import { Link } from "react-router-dom";

const AdminUsers = ({
  currentPage_users,
  totalUsers,
  usersPerPage,
  fetchAdminUsers
}) => {
  return (
    <div>
      <br />
      <AdminSearchBar />
      <UserGrid />
      <div className="bottomWrapper">
        <Paginator
          currentPage={currentPage_users}
          totalItems={totalUsers}
          itemsPerPage={usersPerPage}
          navigateFunction={fetchAdminUsers}
        />
        <Link to="/admin/merchant/new">
          <Button variant="primary">Add User</Button>
        </Link>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  currentPage_users: state.adminUsers.currentPage_users,
  totalUsers: state.adminUsers.totalUsers,
  usersPerPage: state.adminUsers.usersPerPage
});

export default connect(
  mapStateToProps,
  { fetchAdminUsers }
)(AdminUsers);
