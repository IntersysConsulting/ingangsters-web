import React from "react";
import "./Shadow.css";
import { connect } from "react-redux";
import { hideShadow } from "../../actions/creators/shadow";
import { hideModal } from "../../actions/creators/modal";
const ShadowComponent = ({ show, handleClick, shadowOut }) => {
  var classList = ["shadow"];
  if (show) classList.push("show");
  else if (shadowOut) classList.push("out");
  else classList.push("initial");
  return <div className={classList.join(" ")} onClick={handleClick}></div>;
};

function mapStateToProps(state) {
  return {
    show: state.shadow.active,
    shadowOut: state.shadow.outEffect
  };
}

function mapDispatchToProps(dispatch) {
  return {
    handleClick() {
      dispatch(hideShadow());
      dispatch(hideModal());
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShadowComponent);
