const initialState = {
  isLoggedIn: false,
  uId: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_ACTION":
      console.log("Login Success");
      return {
        ...state,
        isLoggedIn: true,
        uId: action.uId,
      };
    case "LOGOUT_ACTION":
      console.log("Logout success");
      return {
        ...state,
        isLoggedIn: false,
        uId: "",
      };

    default:
      return state;
  }
};
export default reducer;
