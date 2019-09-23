import React from "react";
import "../NavBar.css";
import "./IconButton.css";
import { Link } from "react-router-dom";
import Shadow from "../../../UI/Shadow/Shadow";

class IconButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showShadow: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if (this.props.Label !== "Cart") {
      if (!this.state.showShadow) {
        this.setState({ showShadow: true });
        this.renderContentShadow();
      } else {
        this.setState({ showShadow: false });
        this.renderContentShadow();
      }
    } else {
      this.renderContentCart();
    }
  }

  renderContentCart() {
    return (
      <div onClick={this.handleClick} className="iconButton">
        <Link to="/cart">
          <this.props.Icon color="#fff" className="mx-auto buttonIcon" />
          <p
            className="buttonLabel"
            style={{ color: "#fff" }}
          >{`${this.props.Label}`}</p>
        </Link>
      </div>
    );
  }

  renderContentShadow() {
    // this.state.showShadow
    //   ? this.setState({ showShadow: false })
    //   : this.setState({ showShadow: true });
    console.log("Shadow: " + this.state.showShadow);
    return (
      <div onClick={this.handleClick} className="iconButton">
        <this.props.Icon color="#fff" className="mx-auto buttonIcon" />
        <p
          className="buttonLabel"
          style={{ color: "#fff" }}
        >{`${this.props.Label}`}</p>
        <Shadow active={this.state.showShadow} />
      </div>
    );
  }

  render() {
    if (this.props.Label !== "Cart") {
      return this.renderContentShadow();
    } else {
      return this.renderContentCart();
    }
  }
}

export default IconButton;

/*const IconButton = ({ Icon, Label, ClickEvent = () => {} }) => {
  return (
    <div onClick={ClickEvent} className="iconButton">
      <Icon color="#fff" className="mx-auto buttonIcon" />
      <p className="buttonLabel" style={{ color: "#fff" }}>{`${Label}`}</p>
    </div>
  );
};

export default IconButton;*/
