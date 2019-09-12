import React from "react";
import Col from "react-bootstrap/Col";
import "./Card.css";

const Card = ({ name, stock, image, onClick }) => {
  var stocklevel;
  if (stock >= 35) {
    stocklevel = "high";
  } else if (stock >= 20) {
    stocklevel = "medium";
  } else {
    stocklevel = "low";
  }
  return (
    <Col className="productCard" onClick={onClick}>
      <img src={image} alt={name} />
      <div className="productData">
        <p className="productName">{name}</p>
        <p className="productStock">
          Stock: <span className={stocklevel}>{stock}</span>
        </p>
      </div>
    </Col>
  );
};

export default Card;
