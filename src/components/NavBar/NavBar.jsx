import React from "react";
import NavBar from "react-bootstrap/Navbar";
import NavBarBrand from "react-bootstrap/NavbarBrand";
import SearchBar from "./SearchBar/SearchBar";
import IconButton from "./IconButton/IconButton";
import { MdPerson } from "react-icons/md";
import { MdShoppingCart } from "react-icons/md";
import "./NavBar.css";

const NavBarComponent = () => (
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
      <IconButton Icon={MdPerson} Label="Account" />
      <IconButton Icon={MdShoppingCart} Label="Cart" />
    </div>
  </NavBar>
);

export default NavBarComponent;
