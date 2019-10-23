import React from "react";
import "./Notification.css";

class Notification extends React.PureComponent {
  renderContent() {
    return this.props.items.map(item => (
      <div className="notification-element">
        <div className={item.kind}>
          <div calssName="notification-logo">
            <img src="/assets/faviconWhite.ico" alt="" />
          </div>
          <label className="notification-title">{item.title}</label>
        </div>
        <div className="notification-content">{item.message}</div>
      </div>
    ));
  }

  render() {
    return <div className="content">{this.renderContent()}</div>;
  }
}

export default Notification;
