import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { MdSearch } from "react-icons/md";
import { adminSearchProduct } from "../../../actions/creators/adminProducts";
import { connect } from "react-redux";
import "./AdminSearchBar.css";
import "../../../css/colors.css";
import { adminSearchUser } from "../../../actions/creators/adminUsers";

const AdminSearchBar = ({
  adminSearchProduct,
  adminSearchUser,
  adminOption
}) => {
  const [search, setSearch] = useState("");

  const searchSubmit = event => {
    event.preventDefault();
    if (search) {
      if (adminOption === "Products") adminSearchProduct(search);
      if (adminOption === "Users") adminSearchUser(search);
    }
  };

  const handleChange = () => event => {
    event.preventDefault();
    setSearch(event.target.value);
  };

  return (
    <div>
      <Form className="adminSearchBar" onSubmit={searchSubmit}>
        <Form.Group>
          <InputGroup className="searchBox-adminPage">
            <Form.Control
              className="searchBox-input-adminPage"
              type="search"
              placeholder="Search
            here"
              aria-describedby="inputGroupPrepend"
              name="searchTerm"
              onChange={handleChange("search")}
              value={search}
            ></Form.Control>
            <MdSearch
              size="1.8em"
              color="#55565a"
              className="rightSearchIcon-AdminPage"
              onClick={searchSubmit}
            />
          </InputGroup>
        </Form.Group>
      </Form>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    adminOption: state.adminTabBar.activeButton
  };
}

export default connect(
  mapStateToProps,
  { adminSearchProduct, adminSearchUser }
)(AdminSearchBar);
