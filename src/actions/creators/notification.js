export const createNotificationSuccess = (id, message) => {
  return {
    type: "CREATE_NOTIFICATION_SUCCESS",
    payload: {
      id: id,
      message: message
    }
  };
};

export const createNotificationError = (id, message) => {
  return {
    type: "CREATE_NOTIFICATION_ERROR",
    payload: {
      id: id,
      message: message
    }
  };
};

export const createNotificationInfo = (id, message) => {
  return {
    type: "CREATE_NOTIFICATION_INFO",
    payload: {
      id: id,
      message: message
    }
  };
};

export const deleteNotification = id => {
  return {
    type: "DELETE_NOTIFICATION"
  };
};
