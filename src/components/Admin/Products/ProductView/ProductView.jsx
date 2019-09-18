import React, { useState } from "react";
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

const getToken = () => localStorage.getItem("token");
const loadProduct = async (id, setData) => {
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
    var loadingNow = status !== 200;
    setData({
      ...data,
      showDelete: true,
      isLoading: loadingNow,
      submit: updateProduct,
      _id: id
    });
  } catch (err) {
    console.log(err);
  }
};

const updateProduct = async (data, form) => {
  console.log("Updating...");
  const body = {
    _id: data._id,
    name: form.target.name.value,
    description: form.target.description.value,
    price: parseInt(form.target.price.value),
    stock: parseInt(form.target.stock.value),
    image: data.image,
    shippable: data.shippable,
    available: data.available
  };
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + getToken()
    }
  };
  const endpoint = `${API}/products/update`;
  try {
    const res = await axios.put(endpoint, body, config);
    if (res.status) {
      alert("Saved successfully");
    }
  } catch (err) {
    console.log(err);
  }
};

const newProduct = async data => {
  console.log("Creating new...");
  // const config = {
  //   headers: {
  //     "Content-Type": "application/json"
  //   }
  // };
  // const endpoint = `${API}/products/create`;
};

const ProductView = ({ match }) => {
  const { id } = match.params;
  const [data, setData] = useState({
    showDelete: false,
    isLoading: id !== "new",
    submit: newProduct
  });
  let deleteVariant;
  if (data.showDelete) deleteVariant = <Button variant="danger">Delete</Button>;
  else deleteVariant = <span />;

  if (data.isLoading) {
    loadProduct(id, setData);
    return (
      <React.Fragment>
        <Shadow />
        <Bar />
        <Tabs />
        <br />
        <Container>
          <Row className="row adminProductGrid">
            <BouncingBall />
          </Row>
        </Container>
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <Shadow />
        <Bar />
        <Tabs />
        <br />
        <Container>
          <h1>{data.name ? data.name : "New Product"}</h1>
          <br />
          <Form
            className="productForm"
            onSubmit={event => {
              event.preventDefault();
              data.submit(data, event);
            }}
          >
            <Row>
              <Col>
                <Form.Group controlId="name">
                  <Form.Label>Product Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="e.g. Fabuloso"
                    defaultValue={data.name}
                    required
                  />
                </Form.Group>
                <Form.Group controlId="price">
                  <Form.Label>Price</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="e.g. 5"
                    defaultValue={data.price}
                    required
                    min={1}
                  />
                </Form.Group>
                <Form.Group controlId="stock">
                  <Form.Label>Stock</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="e.g. 37"
                    defaultValue={data.stock}
                    required
                    min={1}
                  />
                </Form.Group>
                <Form.Group controlId="description">
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows="4"
                    placeholder="This is an awesome product"
                    defaultValue={data.description}
                    required
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
                <Button variant="primary" className="mx-auto" type="submit">
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
