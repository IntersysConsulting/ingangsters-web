import React from "react";
import { connect } from "react-redux";
import * as actions from "../../../actions/creators/navBar";
const IconButton = ({ isOver, setMouseOut, setMouseOver, Icon, Label }) => {
  console.log(Icon);
  return (
    <div
      onMouseEnter={setMouseOver}
      onMouseLeave={setMouseOut}
      style={{
        backgroundColor: isOver ? "#6c6d73" : "#55565A",
        cursor: "pointer",
        width: "80px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        marginLeft: "5px",
        marginRight: "5px"
      }}
    >
      <Icon color="#fff" size="2.3em" className="mx-auto" />
      <p style={{ color: "#fff" }}>{`${Label}`}</p>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  var key = `mouseOver${ownProps.Label}Button`;
  return {
    isOver: state.navBar[key]
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  var key = `setMouseOver${ownProps.Label}Button`;
  return {
    setMouseOver() {
      dispatch(actions[key](true));
    },
    setMouseOut() {
      dispatch(actions[key](false));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IconButton);
