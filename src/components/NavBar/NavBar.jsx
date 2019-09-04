import React from "react";
import NavBar from "react-bootstrap/Navbar";
import NavBarBrand from "react-bootstrap/NavbarBrand";
import SearchBar from "./SearchBar/SearchBar";
import IconButton from "./IconButton/IconButton";
import { MdPerson } from "react-icons/md";
import { MdShoppingCart } from "react-icons/md";
import { setAccountButtonClicked } from "../../actions/creators/navBar";
import { showShadow } from "../../actions/creators/shadow";
import { hideShadow } from "../../actions/creators/shadow";
import { connect } from "react-redux";
import "./NavBar.css";

const NavBarComponent = ({ shadowActive }) => (
  <NavBar bg="bg-gray" style={{ display: "flex", flexDirection: "row" }}>
    <NavBarBrand>
      <img
        alt=""
        src="/assets/logo.png"
        width="75"
        height="75"
        className="mx-auto"
      />
    </NavBarBrand>
    <div style={{ flex: 1 }} />
    <SearchBar />
    <div style={{ flex: 1 }} />
    <div style={{ display: "flex", flexDirection: "row" }}>
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

const mapStateToProps = state => ({
  shadowActive: state.shadow.active
});
export default connect(
  mapStateToProps,
  {}
)(NavBarComponent);
