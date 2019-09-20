import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import NavbarBrand from "react-bootstrap/NavbarBrand";
import "./SimpleNavBar.css";
import "../../../css/colors.css";

class SimpleNavBar extends Component {
  render() {
    return (
      <Navbar
        bg="dark"
        variant="dark"
        sticky="top"
        className="justify-content-center navbar"
      >
        <center>
          <NavbarBrand href="/" className="navbar-brand">
            <img
              alt=""
              src="/assets/logo.png"
              width="75"
              height="75"
              className="mx-auto"
            />
          </NavbarBrand>
        </center>
      </Navbar>
    );
  }
}
export default SimpleNavBar;
