import React from "react";
import { connect } from "react-redux";
import {
  performAction1,
  performAction2,
  performAction3
} from "../../actions/creators/samples";

const Sample = ({ data, updateString, resetNumber, increaseNumber }) => (
  <div>
    <h3>The number: </h3>
    <span>{data.myNumber}</span>
    <br />
    <h3>The string:</h3>
    <span>{data.myString}</span>
    <br />
    <br />
    <hr />
    <input type="text" onChange={updateString} value={data.myString} />
    <br />
    <button value="Increase!" onClick={increaseNumber}>
      Increase!
    </button>
    <button value="Reset!" onClick={resetNumber}>
      Reset alv!
    </button>
  </div>
);

const mapStateToProps = state => ({
  data: state.sample
});

const mapDispatchToProps = dispatch => ({
  updateString(evt) {
    dispatch(performAction3(evt.target.value));
  },

  resetNumber() {
    dispatch(performAction1());
    dispatch(performAction3("Hola mundo!"));
  },

  increaseNumber() {
    dispatch(performAction2());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sample);
