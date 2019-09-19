export const isAuthenticated = () => {
  if (typeof window == "undefined") {
    return false;
  }
  return localStorage.getItem("token") ? true : false;
};

export const logoutModal = () => {
  console.log("click logout");
  localStorage.removeItem("token");
};
