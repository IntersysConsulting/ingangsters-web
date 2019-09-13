import React from "react";
import "./IconButtonAdmin.css";

const IconButtonAdmin = ({ Icon, ClickEvent = () => {} }) => {
  return (
    <div onClick={ClickEvent} className="iconButton">
      <Icon color="#fff" className="mx-auto buttonIcon" />
    </div>
  );
};

export default IconButtonAdmin;
