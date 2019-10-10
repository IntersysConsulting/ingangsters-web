import React from "react";
import { Link } from "react-router-dom";
import "../../Products/ProductCard/Card.css";
import "./UserCard.css";

const UserCard = ({ name, email }) => {
  return (
    <Link className="productCard usersCard">
      <div className="UserData">
        <p className="UserName leftText">{name}</p>
        <p className="UserEmail leftText">{email}</p>
      </div>
    </Link>
  );
};

export default UserCard;
