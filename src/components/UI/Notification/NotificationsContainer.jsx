import React from "react";
import { connect } from "react-redux";
import Notification from "./Notification";
import "./NotificationContainer.css";

class NotificationContainer extends React.Component {
  render() {
    const { notifications } = this.props;
    return (
      <div className="notify-container">
        <Notification items={notifications} />
      </div>
    );
  }
}
export default connect(({ notification }) => ({ notifications: notification }))(
  NotificationContainer
);
