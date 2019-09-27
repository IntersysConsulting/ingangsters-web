import React from "react";
import { Button } from "react-bootstrap";
import { Formik } from "formik";
import "../../../../css/colors.css";
import "./FastLoginModal.css";

class FastLoginModal extends React.Component {
  render() {
    return (
      <div className="fastLoginModal">
        <div className="LoginModalContent">
          <form>
            <div className="form-group-modal">
              <input
                type="email"
                placeholder="  Email"
                className="form-control-modal"
              />
            </div>
            <div className="form-group-modal">
              <input
                type={"password"}
                placeholder="  Password"
                className="form-control-modal"
              />
            </div>
          </form>
          <Button className="fastLoginButtonModal">Login</Button>
        </div>
      </div>
    );
  }
}

export default FastLoginModal;
