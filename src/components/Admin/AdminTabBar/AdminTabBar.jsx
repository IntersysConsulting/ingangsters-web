import React from "react";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import "./AdminTabBar.css";
import "../../../css/colors.css";
import { connect } from "react-redux";
import { setActiveAdminBarButton } from "../../../actions/creators/AdminTabBar";

const AdminTabBar = ({ active, handleClick }) => {
  return (
    <div className="AdminTabBar">
      <ButtonGroup size="lg">
        <Button onClick={handleClick} value="Users">
          Users
        </Button>
        <Button onClick={handleClick} value="Products">
          Products
        </Button>
        <Button onClick={handleClick} value="Orders">
          Orders
        </Button>
      </ButtonGroup>
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
