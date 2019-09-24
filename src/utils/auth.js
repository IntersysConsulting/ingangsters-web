export const isAuthenticated = () => {
  var ghost = localStorage.getItem("token");
  if (typeof window == "undefined") {
    return false;
  }
  console.log(ghost);
  return localStorage.getItem("token") != null;
};

export const logoutModal = () => {
  //console.log("click logout");
  localStorage.removeItem("token");
};
