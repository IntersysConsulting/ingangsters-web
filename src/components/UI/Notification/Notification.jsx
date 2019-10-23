import React from "react";
import "./Notification.css";
import { MdClose } from "react-icons/md";
import { connect } from "react-redux";
import { deleteNotification } from "../../../actions/creators/notification";

class Notification extends React.PureComponent {
  renderContent() {
    return this.props.items.map(item => (
      <div className="notification-element" key={item.id}>
        <div className={item.kind}>
          <div className="notification-logo">
            <img src="/assets/faviconWhite.ico" alt="" />
          </div>
          <label className="notification-title">{item.title}</label>
          <MdClose
            className="notification-close-button"
            onClick={() => {
              this.props.deleteNotification(item.id);
            }}
          />
        </div>
        <div className="notification-content">{item.message}</div>
      </div>
    ));
  }

  render() {
    return <div className="content">{this.renderContent()}</div>;
  }
}

const mapDispatchToProps = dispatch => {
  return {
    deleteNotification: id => {
      dispatch(deleteNotification(id));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Notification);
