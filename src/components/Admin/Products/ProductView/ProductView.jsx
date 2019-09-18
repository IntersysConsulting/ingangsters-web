import React, { useState, Fragment } from "react";
import Bar from "../../../AdminNavBar/AdminNavBar";
import Tabs from "../../../AdminTabBar/AdminTabBar";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import BouncingBall from "../LoadingBall/LoadingBall";
import { API } from "../../../../config";
import axios from "axios";
import Shadow from "../../../Shadow/Shadow";
import "./ProductView.css";

const loadProduct = async (id, setData, setLoading) => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };
  const endpoint = `${API}/products/single`;
  const body = JSON.stringify({ _id: id });
  try {
    const res = await axios.post(endpoint, body, config);
    const { status, data } = res;
    setData({ ...data, showDelete: true });
    if (status === 200) setLoading(false);
  } catch (err) {
    console.log(err);
  }
};

const ProductView = ({ match }) => {
  const { id } = match.params;
  const [isLoading, setLoading] = useState(id !== "new");
  const [data, setData] = useState({ showDelete: false });
  let deleteVariant;
  if (data.showDelete) deleteVariant = <Button variant="danger">Delete</Button>;
  else deleteVariant = <span />;

  if (isLoading) {
    loadProduct(id, setData, setLoading);
    return (
      <React.Fragment>
        <Shadow />
        <Bar />
        <Tabs />
        <br />
        <Container>
          <Row>
            <BouncingBall />
          </Row>
        </Container>
      </React.Fragment>
    );
  } else {
    console.log(data);
    return (
      <React.Fragment>
        <Shadow />
        <Bar />
        <Tabs />
        <br />
        <Container>
          <h1>{data.name ? data.name : "New Product"}</h1>
          <br />
          <Form className="productForm">
            <Row>
              <Col>
                <Form.Group controlId="name">
                  <Form.Label>Product Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="e.g. Fabuloso"
                    defaultValue={data.name}
                  />
                </Form.Group>
                <Form.Group controlId="price">
                  <Form.Label>Price</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="e.g. 5"
                    defaultValue={data.price}
                  />
                </Form.Group>
                <Form.Group controlId="stock">
                  <Form.Label>Stock</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="e.g. 37"
                    defaultValue={data.stock}
                  />
                </Form.Group>
                <Form.Group controlId="description">
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows="4"
                    placeholder="This is an awesome product"
                    defaultValue={data.description}
                  />
                </Form.Group>
              </Col>
              <Col className="mx-auto">
                <img
                  alt="my product"
                  src={
                    data.image
                      ? data.image
                      : "http://mpmco.com/wp-content/uploads/2018/02/placeholder.jpg"
                  }
                />
                <br />
                <Button variant="success" className="mx-auto">
                  Upload an image
                </Button>
              </Col>
            </Row>
            <br />
            <Row>
              <Col className="bottomButtonBar">
                <Button variant="primary" className="mx-auto">
                  Save
                </Button>
                {deleteVariant}
              </Col>
              <br />
            </Row>
            <br />
          </Form>
        </Container>
      </React.Fragment>
    );
  }
};

export default ProductView;
