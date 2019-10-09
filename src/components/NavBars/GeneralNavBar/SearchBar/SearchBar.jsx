import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { MdSearch } from "react-icons/md";
import Button from "react-bootstrap/Button";
import { connect } from "react-redux";
import { searchProducts } from "../../../../actions/creators/products";
import "./SearchBar.css";
import { withRouter } from "react-router-dom";

const SearchBar = ({ searchProducts, history }) => {
  const [search, setSearch] = useState("");

  useEffect(() => {
    //slice the first element of the search string due to is the "?" character
    let querySearch = window.decodeURI(history.location.search.slice(1));
    searchProducts(querySearch);
  }, [history.location.search, searchProducts]);

  const searchSubmit = event => {
    event.preventDefault();
    if (search) {
      history.push({
        pathname: "/products/search",
        search
      });
    }
  };

  const handleChange = () => event => {
    event.preventDefault();
    setSearch(event.target.value);
  };

  return (
    <Form className="searchBarWrapper" onSubmit={searchSubmit}>
      <Form.Group>
        <InputGroup className="searchBar">
          <InputGroup.Prepend className="prepend">
            <MdSearch
              size="1.8em"
              color="#353535"
              style={{
                position: "relative",
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)"
              }}
            />
          </InputGroup.Prepend>
          <Form.Control
            className="searchBox form-control"
            type="search"
            placeholder="Search here"
            aria-describedby="inputGroupPrepend"
            name="searchTerm"
            onChange={handleChange("search")}
          />
          <InputGroup.Append className="append">
            <Button
              className="searchButton"
              variant="searchbar"
              type="button"
              onClick={searchSubmit}
            >
              Search
            </Button>
            <MdSearch
              size="1.8em"
              color="#353535"
              className="rightSearchIcon"
              style={{
                position: "relative",
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)"
              }}
            />
          </InputGroup.Append>
        </InputGroup>
      </Form.Group>
    </Form>
  );
};

export default connect(
  null,
  { searchProducts }
)(withRouter(SearchBar));
