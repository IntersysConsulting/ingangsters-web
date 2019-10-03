import React from "react";
import "./ThankYou.css";
import { Button } from "react-bootstrap";
import SimpleNavBar from "../../NavBars/SimpleNavBar/SimpleNavBar";
import { Link } from "react-router-dom";

class ThankYou extends React.Component {
  constructor(props) {
    super(props);
    this.state = { address: null };
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
              Name Lastname <br />
              Street 0000 <br />
              City, State, Country <br />
              ZIP <br />
              0000000000
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
