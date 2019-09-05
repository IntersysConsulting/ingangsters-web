import React from "react";
import "../NavBar.css";
import "./IconButton.css";

const IconButton = ({ Icon, Label, ClickEvent = () => {} }) => {
  return (
    <div onClick={ClickEvent} className="iconButton">
      <Icon color="#fff" className="mx-auto buttonIcon" />
      <p className="buttonLabel" style={{ color: "#fff" }}>{`${Label}`}</p>
    </div>
  );
};

export default IconButton;
