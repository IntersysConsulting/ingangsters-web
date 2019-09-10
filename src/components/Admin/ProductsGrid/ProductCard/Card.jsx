import React from "react";
import Col from "react-bootstrap/Col";
import "./Card.css";

const Card = ({ productName, productStock, productImage, onClick }) => {
  var stocklevel;
  if (productStock >= 35) {
    stocklevel = "high";
  } else if (productStock >= 20) {
    stocklevel = "medium";
  } else {
    stocklevel = "low";
  }
  return (
    <Col className="productCard" onClick={onClick}>
      <img src={productImage} alt={productName} />
      <div className="productData">
        <p className="productName">{productName}</p>
        <p className="productStock">
          Stock: <span className={stocklevel}>{productStock}</span>
        </p>
      </div>
    </Col>
  );
};

export default Card;
