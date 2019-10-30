import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";

const Card = ({ name, stock, image, path, available, reload }) => {
  var stocklevel;
  if (stock >= 35) {
    stocklevel = "high";
  } else if (stock >= 20) {
    stocklevel = "medium";
  } else {
    stocklevel = "low";
  }
  const classUnavailable = available ? "" : "unavailable";
  return (
    <Link
      className={"productCard " + classUnavailable}
      to={{ pathname: path, reload: reload }}
    >
      <div className="productImage">
        <img src={image} alt={name} />
      </div>
      <div className="productData">
        <p className="productName">{name}</p>
        <p className="productStock">
          Stock: <span className={stocklevel}>{stock}</span>
        </p>
      </div>
    </Link>
  );
};

export default Card;
