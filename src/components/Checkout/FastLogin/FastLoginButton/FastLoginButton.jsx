import React from "react";
import { Button } from "react-bootstrap";
import "./FastLoginButton.css";
import "../../../../css/colors.css";
<<<<<<< HEAD

const FastLoginButton = props => {
  return (
    <Button className="FastLoginButton" onClick={props.onClick}>
      Login for faster Checkout
    </Button>
  );
};

export default FastLoginButton;
=======
import { connect } from "react-redux";

const FastLoginButton = ({ isAuthenticated }) => {
  if (!isAuthenticated) {
    return (
      <Button className="FastLoginButton">Login for faster Checkout</Button>
    );
  } else {
    return <div></div>;
  }
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(FastLoginButton);
>>>>>>> 92b8b64ecb7987c77ac5ab3f81f40d0c21594e64
