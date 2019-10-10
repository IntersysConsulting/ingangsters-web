import React from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { MdSearch } from "react-icons/md";
import "./AdminSearchBar.css";
import "../../../css/colors.css";

const AdminSearchBar = () => {
  return (
    <div>
      <Form className="adminSearchBar">
        <Form.Group>
          <InputGroup className="searchBox-adminPage">
            <Form.Control
              className="searchBox-input-adminPage"
              type="search"
              placeholder="Search
            here"
              aria-describedby="inputGroupPrepend"
              name="searchTerm" //
              //onChange={handleChange("search")}
            ></Form.Control>
            <InputGroup.Append className="searchIcon-box-adminPage">
              <MdSearch
                size="1.8em"
                color="#55565a"
                className="rightSearchIcon-AdminPage"
              />
            </InputGroup.Append>
          </InputGroup>
        </Form.Group>
      </Form>
    </div>
  );
};

export default AdminSearchBar;
