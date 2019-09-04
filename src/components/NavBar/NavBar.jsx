import React from "react";
import NavBar from "react-bootstrap/Navbar";
import NavBarBrand from "react-bootstrap/NavbarBrand";
import SearchBar from "./SearchBar/SearchBar";
import IconButton from "./IconButton/IconButton";
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
import "./NavBar.css";

const NavBarComponent = ({
  shadowActive,
  responsiveMenuActive,
  toggleMenuResponsive
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
      <NavBarBrand>
        <img
          alt=""
          src="/assets/logo.png"
          width="75"
          height="75"
          className="mx-auto"
        />
        <ToggleButton
          size="3em"
          color="#ffffff"
          className="cbButton"
          onClick={() => {
            toggleMenuResponsive();
          }}
        />
      </NavBarBrand>
      <div className="flexSeparator" style={{ flex: 1 }} />
      <SearchBar />
      <div className="flexSeparator" style={{ flex: 1 }} />
      <div className="iconButtonWrapper">
        <IconButton
          Icon={MdPerson}
          Label="Account"
          ClickEvent={() => {
            console.log("clicked account");
          }}
          Dispatch={shadowActive ? hideShadow() : showShadow()}
        />
        <IconButton
          Icon={MdShoppingCart}
          Label="Cart"
          Dispatch={{ type: "NAAN" }}
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
  }
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBarComponent);
