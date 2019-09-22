import React from "react";
import "../NavBar.css";
import "./IconButton.css";
import { Link } from "react-router-dom";

class IconButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showShadow: false, openCart: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.Label === "Cart"
      ? this.setState({ openCart: true })
      : this.state.showShadow
      ? this.setState({ showShadow: false })
      : this.setState({ showShadow: true });
    // this.props.Label === "Cart" ? this.setState({openCart: true}) : this.setState({showShadow: false});
    // this.props.Label === "Cart" ? console.log("Cart") : console.log("User");
    // console.log("Label: "+this.props.Label);
    // console.log("Show shadow: "+this.state.showShadow);
    // console.log("Cart: "+this.state.openCart);
  }

  componentDidMount() {
    this.handleClick();
  }

  renderContent() {
    if (this.state.showShadow) {
      return (
        <div onClick={this.handleClick} className="iconButton">
          {/* ////////////////////////////cuidado con este link */}
          <Link to="/showShadow">
          <this.props.Icon color="#fff" className="mx-auto buttonIcon" />
          <p
            className="buttonLabel"
            style={{ color: "#fff" }}
          >{`${this.props.Label}`}</p>
          </Link>
        </div>
      );
    }
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

  render() {
    return (this.renderContent());
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
