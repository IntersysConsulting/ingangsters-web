import React from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { MdSearch } from "react-icons/md";
import Button from "react-bootstrap/Button";

const SearchBar = () => (
  <Form>
    <Form.Group>
      <InputGroup style={{ height: "35px" }}>
        <InputGroup.Prepend
          style={{
            backgroundColor: "#ffffff",
            borderTopLeftRadius: "5px",
            borderBottomLeftRadius: "5px",
            borderColor: null,
            height: "100%"
          }}
        >
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
          type="text"
          placeholder="Search here"
          aria-describedby="inputGroupPrepend"
          name="username"
          style={{
            width: "450px",
            fontSize: "14px",
            height: "100%",
            border: "none"
          }}
        />
        <InputGroup.Append style={{}}>
          <Button
            variant="searchbar"
            style={{
              backgroundColor: "#6CC04A",
              borderTopRightRadius: "5px",
              borderBottomRightRadius: "5px",
              borderColor: "#6CC04A",
              fontSize: "14px",
              height: "100%"
            }}
          >
            Search
          </Button>
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
