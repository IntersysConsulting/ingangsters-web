import * as types from "../types/AdminTabBar";

export function setActiveAdminBarButton(newButton) {
  return { type: types.SET_ACTIVE_ADMINBAR_BUTTON, newButton };
}
