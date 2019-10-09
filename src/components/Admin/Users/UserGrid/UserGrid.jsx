import React from "react";
import UserCard from "../UserCard/UserCard";
import "../../Products/Grid/Grid.css";
import { connect } from "react-redux";
import LoadingBall from "../../../UI/Loading/Loading";
import { getAdminUsers } from "../../../../actions/creators/adminUsers";

export const UsersGrid = ({
  users,
  loading,
  //finishedFetchUser,
  // fetchAdminUsers,
  getAdminUsers
}) => {
  if (users.length === 0 /* && !loading  && !finishedFetch */) {
    getAdminUsers();
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
        //onClick={"/admin/product/" + item._id}
      />
    ));
    return <div className="row adminProductGrid">{userCards}</div>;
  }
};

const mapStateToProps = state => ({
  users: state.adminUsers.adminList,
  loading: state.adminUsers.fetching_users
  // finishedFetch: state.adminProducts.finishedFetching
});

export default connect(
  mapStateToProps,
  { getAdminUsers }
)(UsersGrid);
