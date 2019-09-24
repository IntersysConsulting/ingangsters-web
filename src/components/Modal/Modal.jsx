import React from "react";
import ModalButton from "./ModalButton/ModalButton";
import "./Modal.css";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

class Shadow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderContent() {
    console.log("Props de log: " + this.props.log);
    if (this.props.log) {
      return (
        <Card>
          {/* Para ir al account que no tenemos */}
          <Link to="/details/5d7676f35db4e862cc84027d">
            <ModalButton
              label="Account Details"
              className="buttonOne"
            ></ModalButton>
          </Link>
          <Link to="/logout">
            <ModalButton label="Logout" className="buttonTwo"></ModalButton>
          </Link>
        </Card>
      );
    } else {
      return (
        <Card>
          <Link to="/login">
            <ModalButton label="Login" className="buttonOne"></ModalButton>
          </Link>
          <Link to="/signup">
            <ModalButton label="Sign Up" className="buttonTwo"></ModalButton>
          </Link>
        </Card>
      );
    }
  }

  render() {
    return this.renderContent();
  }
}

export default Shadow;

// const Modal = ({ show, isAuthenticated }) => {
//   //console.log("Logueado: " + logged);
//   if (show) {
//     if (isAuthenticated) {
//       return (
//         <Card>
//           {/* Para ir al account que no tenemos */}
//           <Link to="/esta_pagina_sera_account_details">
//             <ModalButton
//               label="Account Details"
//               className="buttonOne"
//             ></ModalButton>
//           </Link>
//           <Link to="/logout">
//             <ModalButton label="Logout" className="buttonTwo"></ModalButton>
//           </Link>
//         </Card>
//       );
//     } else {
//       return (
//         <Card>
//           <Link to="/signin">
//             <ModalButton label="Login" className="buttonOne"></ModalButton>
//           </Link>
//           <Link to="/signup">
//             <ModalButton label="Sign Up" className="buttonTwo"></ModalButton>
//           </Link>
//         </Card>
//       );
//     }
//   }
//   return <div />;
// };

// export default Modal;
