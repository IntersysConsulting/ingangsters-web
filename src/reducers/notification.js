export default function(listOfNotifications = [], action) {
  if (
    (action.type === "CREATE_NOTIFICATION_SUCCESS") |
    (action.type === "CREATE_NOTIFICATION_ERROR") |
    (action.type === "CREATE_NOTIFICATION_INFO")
  ) {
    return [...listOfNotifications, action.payload];
  } else if (action.type === "DELETE_NOTIFICATION") {
    return listOfNotifications.filter(
      object => object.id !== action.payload.id
    );
  }
  return listOfNotifications;
}
