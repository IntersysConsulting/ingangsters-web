import React from "react";
import "./ThankYou.css";
import { Button } from "react-bootstrap";
import SimpleNavBar from "../../NavBars/SimpleNavBar/SimpleNavBar";
import { Link } from "react-router-dom";

class ThankYou extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.location.state);
  }

  renderContent() {
    return (
      <div>
        <SimpleNavBar />
        <div className="ty-container">
          <p className="ty-message">Thank you for shopping with us!</p>
          <p className="ty-order-sent">Your order was sent to:</p>
          <div className="address-data">
            <p className="address-data-text">
              {this.props.location.state.name} <br />
              {this.props.location.state.address.street}{" "}
              {this.props.location.state.address.number} <br />
              {this.props.location.state.address.city},{" "}
              {this.props.location.state.address.state},{" "}
              {this.props.location.state.address.country} <br />
              {this.props.location.state.address.zip} <br />
              {this.props.location.state.address.phone}
            </p>
          </div>
          <Link to="/">
            <Button className="button-ty-page">Continue Shopping</Button>
          </Link>
        </div>
      </div>
    );
  }

  render() {
    return this.renderContent();
  }
}

export default ThankYou;
