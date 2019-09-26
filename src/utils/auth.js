export const isAuthenticated = () => {
  if (typeof window == "undefined") {
    return false;
  }

  return localStorage.getItem("token") != null;
};

export const logoutModal = () => {
  localStorage.removeItem("token");
};
