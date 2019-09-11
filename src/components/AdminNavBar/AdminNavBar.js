import React from "react";
import NavBar from "react-bootstrap/Navbar";
import NavBarBrand from "react-bootstrap/NavbarBrand";
import IconButton from "../NavBar/IconButton/IconButton";
import { MdPerson } from "react-icons/md";

import { showShadow } from "../../actions/creators/shadow";
import { hideShadow } from "../../actions/creators/shadow";
import { connect } from "react-redux";
import { MdMenu } from "react-icons/md";
import { FaRegWindowClose } from "react-icons/fa";
import "../../css/colors.css";
import "./AdminNavBar.css";

const NavBarComponent = ({ shadowActive, _dispatch }) => {
  var navBarClassList = ["navbar-responsive"];
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
      </NavBarBrand>
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
  _dispatch(action) {
    dispatch(action);
  }
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBarComponent);
