import React from "react";
import "../NavBar.css";
import "./IconButton.css";
import { Link } from "react-router-dom";

class IconButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { show: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if (this.props.Label !== "Cart") {
      if (!this.state.show) {
        this.setState({ show: true });
      }
    } else {
      window.location = "/cart";
    }
  }

  renderContentCart() {
    return (
      <div onClick={this.handleClick} className="iconButton">
        <Link to="/cart" style={{ textDecoration: "none" }}>
          <this.props.Icon color="#fff" className="mx-auto buttonIcon" />
          <p
            className="buttonLabel"
            style={{ color: "#fff" }}
          >{`${this.props.Label}`}</p>
        </Link>
      </div>
    );
  }

  renderContentModal() {
    return (
      <div onClick={this.props.onClick} className="iconButton">
        <this.props.Icon color="#fff" className="mx-auto buttonIcon" />
        <p
          className="buttonLabel"
          style={{ color: "#fff" }}
        >{`${this.props.Label}`}</p>
      </div>
    );
  }

  renderContentAdmin() {
    return (
      <div onClick={this.props.onClick} className="iconButton">
        <this.props.Icon color="#fff" className="mx-auto buttonIcon" />
      </div>
    );
  }

  render() {
    if (this.props.type === "z") {
      return this.renderContentAdmin();
    } else {
      if (this.props.Label !== "Cart") {
        return this.renderContentModal();
      } else {
        return this.renderContentCart();
      }
    }
  }
}

export default IconButton;
