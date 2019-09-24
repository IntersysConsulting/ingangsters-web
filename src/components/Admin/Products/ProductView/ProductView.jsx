import React, { useState } from "react";
import Bar from "../../../NavBars/AdminNavBar/AdminNavBar";
import Tabs from "../../AdminTabBar/AdminTabBar";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import BouncingBall from "../../../UI/Loading/Loading";
import Shadow from "../../../UI/Shadow/Shadow";
import "./ProductView.css";
import { newProduct, loadProduct, imageChange } from "./Connections";

const ProductView = ({ match }) => {
  const { id } = match.params;
  const [data, setData] = useState({
    showDelete: false,
    isLoading: id !== "new",
    submit: newProduct,
    disableSave: false
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
            encType="multipart/form-data"
          >
            <Row>
              <Col md={6} sm={12}>
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
              <Col md={6} sm={12} className="mx-auto imageWrapper">
                <img
                  alt="my product"
                  src={
                    data.image
                      ? data.image
                      : "http://mpmco.com/wp-content/uploads/2018/02/placeholder.jpg"
                  }
                  id="productImagePreview"
                />
                <br />
                <Form.Group controlId="image">
                  <Form.Label className="mx-auto btn btn-success">
                    Upload an image
                  </Form.Label>
                  <Form.Control
                    type="file"
                    required={!data.image}
                    className="inputfile"
                    onChange={imageChange(setData)}
                  />
                </Form.Group>
              </Col>
            </Row>
            <br />
            <Row>
              <Col className="bottomButtonBar">
                <Button
                  variant="primary"
                  className="mx-auto"
                  type="submit"
                  disabled={data.disableSave}
                >
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
