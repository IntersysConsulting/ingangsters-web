import React from "react";
import NavBar from "react-bootstrap/Navbar";
import NavBarBrand from "react-bootstrap/NavbarBrand";
import IconButton from "../NavBar/IconButton/IconButton";
import { MdPerson } from "react-icons/md";
import { MdShoppingCart } from "react-icons/md";
import {
  setAccountButtonClicked,
  toggleMenuResponsive
} from "../../actions/creators/navBar";
import { showShadow } from "../../actions/creators/shadow";
import { hideShadow } from "../../actions/creators/shadow";
import { connect } from "react-redux";
import { MdMenu } from "react-icons/md";
import { FaRegWindowClose } from "react-icons/fa";
import "../../css/colors.css";
import "./AdminNavBar.css";

const AdminNavBar = ({
  shadowActive,
  responsiveMenuActive,
  toggleMenuResponsive,
  _dispatch
}) => {
  var navBarClassList = ["navbar-responsive"];
  let ToggleButton;
  if (responsiveMenuActive) {
    navBarClassList.push("active");
    ToggleButton = FaRegWindowClose;
  } else {
    ToggleButton = MdMenu;
  }

  return (
    <NavBar bg="bg-gray" className={navBarClassList.join(" ")}>
      <NavBarBrand className="navbar-elements">
        <img
          alt=""
          src="/assets/logo.png"
          width="75"
          height="75"
          className="mx-auto"
        />
        <ToggleButton
          size="2.4em"
          color="#ffffff"
          className="cbButton"
          onClick={() => {
            toggleMenuResponsive();
          }}
        />
      </NavBarBrand>
      <div className="flexSeparator" style={{ flex: 1 }} />
      <div className="flexSeparator" style={{ flex: 1 }} />
      <div className="iconButtonWrapper">
        <IconButton
          Icon={MdPerson}
          Label="Account"
          ClickEvent={() => {
            console.log("clicked account");
            if (shadowActive) _dispatch(hideShadow());
            else _dispatch(showShadow());
          }}
        />
      </div>
    </NavBar>
  );
};

const mapStateToProps = state => ({
  shadowActive: state.shadow.active,
  responsiveMenuActive: state.navBar.responsiveMenuActive
});

const mapDispatchToProps = dispatch => ({
  toggleMenuResponsive() {
    dispatch(toggleMenuResponsive());
  },
  _dispatch(action) {
    dispatch(action);
  }
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdminNavBar);
