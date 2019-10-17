import React from "react";
import UserCard from "../UserCard/UserCard";
import "../../Products/Grid/Grid.css";
import { connect } from "react-redux";
import LoadingBall from "../../../UI/Loading/Loading";
import { fetchAdminUsers } from "../../../../actions/creators/adminUsers";

export const UsersGrid = ({
  users,
  loading,
  finishedFetchUser,
  fetchAdminUsers
}) => {
  if (users.length === 0 && !loading && !finishedFetchUser) {
    fetchAdminUsers(1);
  }
  if (loading) {
    return (
      <div className="row adminProductGrid">
        <LoadingBall />
      </div>
    );
  } else {
    const userCards = users.map(user => (
      <UserCard
        name={user.name}
        email={user.email}
        key={user._id}
        goto={"/admin/merchant/" + user._id}
      />
    ));
    return <div className="row adminProductGrid">{userCards}</div>;
  }
};

const mapStateToProps = state => ({
  users: state.adminUsers.adminList,
  loading: state.adminUsers.fetching_users,
  finishedFetchUser: state.adminUsers.finishedFetching_users
});

export default connect(
  mapStateToProps,
  { fetchAdminUsers }
)(UsersGrid);
