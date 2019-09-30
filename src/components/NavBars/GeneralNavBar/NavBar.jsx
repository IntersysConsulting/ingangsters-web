import React from "react";
import NavBar from "react-bootstrap/Navbar";
import NavBarBrand from "react-bootstrap/NavbarBrand";
import SearchBar from "./SearchBar/SearchBar";
import IconButton from "./IconButton/IconButton";
import { MdShoppingCart } from "react-icons/md";
import { toggleMenuResponsive } from "../../../actions/creators/navBar";
import { connect } from "react-redux";
import { MdMenu } from "react-icons/md";
import { FaRegWindowClose } from "react-icons/fa";
import { Link } from "react-router-dom";
import ModalComponent from "../../Modals/ModalGeneral/Modal";
import "../../../css/colors.css";
import "./NavBar.css";

export const NavBarComponent = ({
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
    <div>
      <NavBar bg="bg-gray" className={navBarClassList.join(" ")}>
        <NavBarBrand>
          <Link to="/">
            <img
              alt=""
              src="/assets/logo.png"
              width="75"
              height="75"
              className="mx-auto"
            />
          </Link>
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
        <SearchBar />
        <div className="flexSeparator" style={{ flex: 1 }} />
        <div className="iconButtonWrapper">
          <ModalComponent />
          <div className="verticalSeparator" />
          <IconButton Icon={MdShoppingCart} Label="Cart" />
        </div>
      </NavBar>
    </div>
  );
};

const mapStateToProps = state => ({
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
)(NavBarComponent);
