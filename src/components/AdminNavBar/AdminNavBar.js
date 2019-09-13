import React from "react";
import Navbar from "react-bootstrap/Navbar";
import NavbarBrand from "react-bootstrap/NavbarBrand";
import IconButtonAdmin from "./IconButtonAdmin/IconButtonAdmin";
import { MdPerson } from "react-icons/md";
import { showShadow } from "../../actions/creators/shadow";
import { hideShadow } from "../../actions/creators/shadow";
import { connect } from "react-redux";
import "../../css/colors.css";
import "./AdminNavBar.css";

const NavBarComponent = ({ shadowActive, _dispatch }) => {
  return (
    <Navbar bg="dark" variant="dark" sticky="top" className="">
      <NavbarBrand className="navbar-brand">
        <img
          alt=""
          src="/assets/logo.png"
          width="75"
          height="75"
          className="mx-auto"
        />
      </NavbarBrand>
      <div className="iconButtonWrapper">
        <IconButtonAdmin
          Icon={MdPerson}
          Label="Account"
          ClickEvent={() => {
            console.log("clicked account");
            if (shadowActive) _dispatch(hideShadow());
            else _dispatch(showShadow());
          }}
        />
      </div>
    </Navbar>
  );
};

const mapStateToProps = state => ({
  shadowActive: state.shadow.active,
  responsiveMenuActive: state.navBar.responsiveMenuActive
});

const mapDispatchToProps = dispatch => ({
  _dispatch(action) {
    dispatch(action);
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBarComponent);
