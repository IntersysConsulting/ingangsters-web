import React from "react";
import { Link } from "react-router-dom";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import "./AdminTabBar.css";
import "../../../css/colors.css";
import { connect } from "react-redux";
import { setActiveAdminBarButton } from "../../../actions/creators/AdminTabBar";

const AdminTabBar = ({ handleClick }) => {
  return (
    <div className="AdminTabBar">
      <ButtonGroup className="buttonGroupAdmin" size="lg">
        <div id="adminTabBarUsersDiv">
          <Link to="/admin/dashboard">
            <Button
              id="adminTabBarUsersButton"
              className="tabBarFirstButton"
              onClick={handleClick}
              value="Users"
            >
              Users
            </Button>
          </Link>
        </div>

        <div id="adminTabBarProductsDiv">
          <Link to="/admin/dashboard">
            <Button
              id="adminTabBarProductsButton"
              onClick={handleClick}
              value="Products"
            >
              Products
            </Button>
          </Link>
        </div>

        <div id="adminTabBarOrdersDiv">
          <Link to="/admin/dashboard">
            <Button
              id="adminTabBarOrdersButton"
              className="tabBarLastButton"
              onClick={handleClick}
              value="Orders"
            >
              Orders
            </Button>
          </Link>
        </div>
      </ButtonGroup>
      <br />
      <br />
    </div>
  );
};

function mapStateToProps(state) {
  return {
    active: state.adminTabBar.activeButton
  };
}

function mapDispatchToProps(dispatch) {
  return {
    handleClick(e) {
      dispatch(setActiveAdminBarButton(e.target.value));
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdminTabBar);
