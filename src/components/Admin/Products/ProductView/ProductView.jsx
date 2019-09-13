import React from "react";
import Bar from "../../../AdminNavBar/AdminNavBar";
import Tabs from "../../../AdminTabBar/AdminTabBar";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const ProductView = ({ match }) => {
  const { id } = match.params;
  return (
    <React.Fragment>
      <Bar />
      <Tabs />
      <Container>
        <h1>This product</h1>
        <br />
        <Form>
          <Row>
            <Col>
              <Form.Group controlId="name">
                <Form.Label>Product Name</Form.Label>
                <Form.Control type="text" placeholder="e.g. Fabuloso" />
              </Form.Group>
              <Form.Group controlId="price">
                <Form.Label>Price</Form.Label>
                <Form.Control type="number" placeholder="e.g. 5" />
              </Form.Group>
              <Form.Group controlId="stock">
                <Form.Label>Stock</Form.Label>
                <Form.Control type="number" placeholder="e.g. 37" />
              </Form.Group>
              <Form.Group controlId="description">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  rows="4"
                  placeholder="This is an awesome product"
                />
              </Form.Group>
            </Col>
            <Col>
              <img
                alt="my product"
                src="https://images-na.ssl-images-amazon.com/images/I/71XN6RnFchL._SL1500_.jpg"
                style={{ width: "350px", height: "auto" }}
              />
              <Button variant="success" className="mx-auto">
                Upload an image
              </Button>
              <br />
            </Col>
          </Row>
        </Form>
      </Container>
    </React.Fragment>
  );
};

export default ProductView;
