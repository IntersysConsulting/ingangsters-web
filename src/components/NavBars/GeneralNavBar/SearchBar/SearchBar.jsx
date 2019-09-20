import React from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { MdSearch } from "react-icons/md";
import Button from "react-bootstrap/Button";
import "./SearchBar.css";

const SearchBar = () => (
  <Form className="searchBarWrapper">
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
          className="searchBox"
          type="text"
          placeholder="Search here"
          aria-describedby="inputGroupPrepend"
          name="searchTerm"
        />
        <InputGroup.Append className="append">
          <Button className="searchButton" variant="searchbar">
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

export default SearchBar;

// <Form.Group as={Col} md="4" controlId="validationFormikUsername">
//               <Form.Label>Username</Form.Label>
//               <InputGroup>
//                 <InputGroup.Prepend>
//                   <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
//                 </InputGroup.Prepend>
//                 <Form.Control
//                   type="text"
//                   placeholder="Username"
//                   aria-describedby="inputGroupPrepend"
//                   name="username"
//                   value={values.username}
//                   onChange={handleChange}
//                   isInvalid={!!errors.username}
//                 />
//                 <Form.Control.Feedback type="invalid">
//                   {errors.username}
//                 </Form.Control.Feedback>
//               </InputGroup>
//             </Form.Group>
