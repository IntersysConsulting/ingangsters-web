import React from "react";
import "./LoadingBall.css";
export default () => (
  <div className="lds-css ng-scope">
    <div style={{ width: "100%", height: "100%" }} className="lds-ball">
      <div></div>
    </div>
  </div>
);
