export const createNotificationSuccess = (id, title, message) => dispatch => {
  dispatch({
    type: "CREATE_NOTIFICATION_SUCCESS",
    payload: {
      id: id,
      title: title,
      message: message,
      kind: "success-notification"
    }
  });
};

export const createNotificationError = (id, title, message) => dispatch => {
  dispatch({
    type: "CREATE_NOTIFICATION_ERROR",
    payload: {
      id: id,
      title: title,
      message: message,
      kind: "error-notification"
    }
  });
};

export const createNotificationInfo = (id, title, message) => dispatch => {
  dispatch({
    type: "CREATE_NOTIFICATION_INFO",
    payload: {
      id: id,
      title: title,
      message: message,
      kind: "info-notification"
    }
  });
};

export const deleteNotification = id => dispatch => {
  dispatch({
    type: "DELETE_NOTIFICATION",
    payload: {
      id: id
    }
  });
};
