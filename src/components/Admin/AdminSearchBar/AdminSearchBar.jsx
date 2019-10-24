import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { MdSearch, MdClose } from "react-icons/md";
import { adminSearchProduct } from "../../../actions/creators/adminProducts";
import { connect } from "react-redux";
import "./AdminSearchBar.css";
import "../../../css/colors.css";
import { adminSearchUser } from "../../../actions/creators/adminUsers";

const AdminSearchBar = ({
  adminSearchProduct,
  adminSearchUser,
  adminOption,
  inputSearch
}) => {
  const [search, setSearch] = useState("");

  useEffect(() => {
    setSearch(inputSearch);
  }, [inputSearch]);

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
              placeholder="Search here"
              aria-describedby="inputGroupPrepend"
              name="searchTerm"
              onChange={handleChange("search")}
              value={search}
            ></Form.Control>
            <InputGroup.Append>
              <MdClose
                size="1.8em"
                color="#55565a"
                className="rightSearchIcon-AdminPage ml-2"
              />
            </InputGroup.Append>
            <InputGroup.Append>
              <MdSearch
                size="1.8em"
                color="#55565a"
                className="rightSearchIcon-AdminPage ml-2"
                onClick={searchSubmit}
              />
            </InputGroup.Append>
          </InputGroup>
        </Form.Group>
      </Form>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    adminOption: state.adminTabBar.activeButton,
    inputSearch: state.filters.search
  };
}

export default connect(
  mapStateToProps,
  { adminSearchProduct, adminSearchUser }
)(AdminSearchBar);
