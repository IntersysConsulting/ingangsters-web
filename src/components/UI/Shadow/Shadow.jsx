import React from "react";
import { isAuthenticated } from "../../../utils/auth";
import "../Shadow/Shadow.css";
import Modal from "../../Modal/Modal";

class Shadow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      logged: false,
      shadowClass: "shadow initial"
    };
  }

  componentDidMount() {
    this.setState({ logged: isAuthenticated() });
  }

  typeOfShadow() {
    return this.props.active ? "shadow show" : "shadow out";
  }

  render() {
    // console.log(this.state.logged);
    return (
      <div className={this.typeOfShadow()}>
        <Modal log={this.state.logged}></Modal>
      </div>
    );
  }
}

export default Shadow;

// import React from "react";
// import "./Shadow.css";
// import { connect } from "react-redux";
// import { hideShadow } from "../../../actions/creators/shadow";
// import { hideModal} from "../../../actions/creators/modal";
// const ShadowComponent = ({ show, handleClick, shadowOut }) => {
//   var classList = ["shadow"];
//   if (show) classList.push("show");
//   else if (shadowOut) classList.push("out");
//   else classList.push("initial");
//   return <div className={classList.join(" ")} onClick={handleClick}></div>;
// };

// function mapStateToProps(state) {
//   return {
//     show: state.shadow.active,
//     shadowOut: state.shadow.outEffect
//   };
// }

// function mapDispatchToProps(dispatch) {
//   return {
//     handleClick() {
//       dispatch(hideShadow());
//       dispatch(hideModal());
//     }
//   };
// }

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(ShadowComponent);
