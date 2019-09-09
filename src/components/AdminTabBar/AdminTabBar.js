import React, { Component } from "react";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import "./AdminTabBar.css";
import "../../css/colors.css";

class AdminTabBar extends Component {
  render() {
    return (
      <div className="AdminTabBar">
        <ButtonGroup className="tabButtonGroup" size="lg">
          <Button>Users</Button>
          <Button>Products</Button>
          <Button>Orders</Button>
        </ButtonGroup>
      </div>
    );
  }
}
export default AdminTabBar;
