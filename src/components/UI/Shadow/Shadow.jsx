import React from "react";
import { isAuthenticated } from "../../../utils/auth";

class Shadow extends React.Component {
  //state = {active: null, logged: false, admin: false};
  state = {active: null, logged: false};

  componentDidMount(){
    this.setState({active: true});
    this.setState({logged: isAuthenticated()});
  }

  render(){
    return <div></div>
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
