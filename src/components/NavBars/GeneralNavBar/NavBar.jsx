import React from "react";
import NavBar from "react-bootstrap/Navbar";
import NavBarBrand from "react-bootstrap/NavbarBrand";
import SearchBar from "./SearchBar/SearchBar";
import IconButton from "./IconButton/IconButton";
import { MdPerson } from "react-icons/md";
import { MdShoppingCart } from "react-icons/md";
import { toggleMenuResponsive } from "../../../actions/creators/navBar";
import { showShadow } from "../../../actions/creators/shadow";
import { hideShadow } from "../../../actions/creators/shadow";
import { connect } from "react-redux";
import { MdMenu } from "react-icons/md";
import { FaRegWindowClose } from "react-icons/fa";
import "../../../css/colors.css";
import "./NavBar.css";
import { hideModal } from "../../actions/creators/modal";
import { showModal } from "../../actions/creators/modal";
import Modal from "../Modal/Modal";

const NavBarComponent = ({
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
<<<<<<< development:src/components/NavBars/GeneralNavBar/NavBar.jsx
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
        <IconButton
          Icon={MdPerson}
          Label="Account"
          ClickEvent={() => {
            if (shadowActive) _dispatch(hideShadow());
            else _dispatch(showShadow());
          }}
        />
        <div className="verticalSeparator" />
        <IconButton Icon={MdShoppingCart} Label="Cart" />
      </div>
    </NavBar>
=======
    <div>
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
          <IconButton
            Icon={MdPerson}
            Label="Account"
            ClickEvent={() => {
              //console.log("clicked account");
              if (shadowActive) {
                _dispatch(hideModal());
                _dispatch(hideShadow());
              } else {
                _dispatch(showModal());
                _dispatch(showShadow());
              }
            }}
          />
          <div className="verticalSeparator" />

          <IconButton Icon={MdShoppingCart} Label="Cart" />
        </div>
      </NavBar>
      <Modal />
    </div>
>>>>>>> Responsive modal and the respective labels appears:src/components/NavBar/NavBar.jsx
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
)(NavBarComponent);
