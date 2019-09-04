import React from "react";
import { connect } from "react-redux";
import * as actions from "../../../actions/creators/navBar";
import "../NavBar.css";

const IconButton = ({
  isOver,
  setMouseOut,
  setMouseOver,
  Icon,
  Label,
  dispatchEvent,
  ClickEvent = () => {
    console.log("Click default");
  }
}) => {
  return (
    <div
      onMouseEnter={setMouseOver}
      onMouseLeave={setMouseOut}
      onClick={() => {
        ClickEvent();
        dispatchEvent();
      }}
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
      <Icon color="#fff" className="mx-auto buttonIcon" />
      <p className="buttonLabel" style={{ color: "#fff" }}>{`${Label}`}</p>
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
  let additionalEvents = {};
  if (ownProps.hasOwnProperty("Dispatch")) {
    additionalEvents.dispatchEvent = () => {
      dispatch(ownProps.Dispatch);
    };
  } else {
    additionalEvents.dispatchEvent = () => {};
  }
  return {
    setMouseOver() {
      dispatch(actions[key](true));
    },
    setMouseOut() {
      dispatch(actions[key](false));
    },
    ...additionalEvents
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IconButton);
