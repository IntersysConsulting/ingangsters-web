import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import NavbarBrand from "react-bootstrap/NavbarBrand";
import { Link } from "react-router-dom";
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
          <NavbarBrand className="navbar-brand">
            <Link to="/">
              <img
                alt=""
                src="/assets/logo.png"
                width="75"
                height="75"
                className="mx-auto"
              />
            </Link>
          </NavbarBrand>
        </center>
      </Navbar>
    );
  }
}
export default SimpleNavBar;
