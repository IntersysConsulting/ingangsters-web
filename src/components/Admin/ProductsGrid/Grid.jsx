import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Product from "./ProductCard/Card";
const ProductsGrid = () => {
  return (
    <Container>
      <Row>
        <Product
          productName="This product"
          productStock={10}
          productImage="https://img.icons8.com/cute-clipart/64/000000/box.png"
        />
      </Row>
    </Container>
  );
};

export default ProductsGrid;
