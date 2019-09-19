import React from "react";
import { connect } from "react-redux";
import { hideShadow } from "../../actions/creators/shadow";
import { hideModal } from "../../actions/creators/modal";
import { Redirect } from "react-router-dom";
import { logoutModal } from "../../utils/auth";

const LogoutComponent = ({ hide_Modal }) => {
  //   dispatchEvent(hideModal);
  //   dispatchEvent(hideShadow);
  hide_Modal();
  logoutModal();
  return <Redirect to="/" />;
};

function mapDispatchToProps(dispatch) {
  return {
    hide_Modal() {
      dispatch(hideShadow);
      dispatch(hideModal);
    }
  };
}

function mapStateToProps(state) {
  return {
    modalOut: state.modal.outEffect,
    shadowOut: state.shadow.outEffect
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LogoutComponent);
