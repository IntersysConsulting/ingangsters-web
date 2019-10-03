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
        <Link id="firstTabBarButtonLink" to="/admin/dashboard">
          <Button
            className="tabBarFirstButton"
            onClick={handleClick}
            value="Users"
          >
            Users
          </Button>
        </Link>

        <Link to="/admin/dashboard">
          <Button onClick={handleClick} value="Products">
            Products
          </Button>
        </Link>

        <Link to="/admin/dashboard">
          <Button
            className="tabBarLastButton"
            onClick={handleClick}
            value="Orders"
          >
            Orders
          </Button>
        </Link>
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
      console.log("State Changed");
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdminTabBar);
