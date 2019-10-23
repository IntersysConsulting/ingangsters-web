import React from "react";
import { connect } from "react-redux";
import Notification from "./Notification";
import "./NotificationContainer.css";

class NotificationContainer extends React.Component {
  render() {
    const { notifications } = this.props;
    // console.log(notifications);
    return (
      <div className="notify-container">
        <Notification items={notifications} />
      </div>
    );
    // return notifications.map(notification => console.log(notification.message));
  }
}

//const mapStateToProps = state => ({ notifications: state.notification });

//export default connect(mapStateToProps)(NotificationContainer);
export default connect(({ notification }) => ({ notifications: notification }))(
  NotificationContainer
);
