export const signin = async user => {
  console.log("signin", user);
  try {
    const response = await fetch("http://127.0.0.1:5000/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    });
    console.log("Correct response: ", response);
    return await response.json();
  } catch (error) {
    console.log(error);
  }
};

export const authenticate = (response, next) => {
  if (typeof window !== "undefined") {
    console.log("Authenticate", response.data.token);
    localStorage.setItem("jwt", JSON.stringify(response.data.token));
    next();
  }
};

export const isAuthenticated = () => {
  if (typeof window == "undefined") {
    return false;
  }
  if (localStorage.getItem("jwt")) {
    return JSON.parse(localStorage.getItem("jwt"));
  } else {
    return false;
  }
};
