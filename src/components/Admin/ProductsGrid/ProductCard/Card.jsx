import React from "react";
import Col from "react-bootstrap/Col";
import "./Card.css";

<<<<<<< HEAD
const Card = ({ name, stock, image, onClick }) => {
  var stocklevel;
  if (stock >= 35) {
    stocklevel = "high";
  } else if (stock >= 20) {
=======
const Card = ({ productName, productStock, productImage, onClick }) => {
  var stocklevel;
  if (productStock >= 35) {
    stocklevel = "high";
  } else if (productStock >= 20) {
>>>>>>> d09192a970245d198952305f96d67842e8bcb2b1
    stocklevel = "medium";
  } else {
    stocklevel = "low";
  }
  return (
    <Col className="productCard" onClick={onClick}>
<<<<<<< HEAD
      <img src={image} alt={name} />
      <div className="productData">
        <p className="productName">{name}</p>
        <p className="productStock">
          Stock: <span className={stocklevel}>{stock}</span>
=======
      <img src={productImage} alt={productName} />
      <div className="productData">
        <p className="productName">{productName}</p>
        <p className="productStock">
          Stock: <span className={stocklevel}>{productStock}</span>
>>>>>>> d09192a970245d198952305f96d67842e8bcb2b1
        </p>
      </div>
    </Col>
  );
};

export default Card;
