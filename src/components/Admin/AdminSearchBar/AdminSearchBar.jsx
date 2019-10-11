import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { MdSearch } from "react-icons/md";
import { searchProducts } from "../../../actions/creators/products";
import { connect } from "react-redux";
import "./AdminSearchBar.css";
import "../../../css/colors.css";
import { withRouter } from "react-router-dom";

const AdminSearchBar = ({ searchProducts, history, adminOption }) => {
  const [search, setSearch] = useState("");

  useEffect(() => {
    //slice the first element of the search string due to is the "?" character
    let querySearch = window.decodeURI(history.location.search.slice(1));

    if (adminOption === "Products") {
      searchProducts(querySearch);
    }
  }, [history.location.search, searchProducts]);

  const searchSubmit = event => {
    event.preventDefault();
    if (search) {
      history.push({
        pathname: "admin/products/search",
        search
      });
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
            ></Form.Control>
            <InputGroup.Append className="searchIcon-box-adminPage">
              <MdSearch
                size="1.8em"
                color="#55565a"
                className="rightSearchIcon-AdminPage"
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
    adminOption: state.adminTabBar.activeButton
  };
}

export default connect(
  mapStateToProps,
  { searchProducts }
)(withRouter(AdminSearchBar));
