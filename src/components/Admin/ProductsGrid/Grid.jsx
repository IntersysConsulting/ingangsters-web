import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Product from "./ProductCard/Card";
const ProductsGrid = () => {
  return (
    <Container>
      <Row>
        <Col lg={3} md={6} xs={12}>
          <Product
            productName="This product has a very descriptive and thus large name"
            productStock={10}
            productImage="https://img.icons8.com/cute-clipart/64/000000/box.png"
          ></Product>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductsGrid;
