const initialState = {
  payload: "Hellopayload",
  uId: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_ACTION":
      console.log("Login Success");
      return {
        ...state,
        uId: action.uId,
      };
    case "LOGOUT_ACTION":
      console.log("Logout success");
      return {
        ...state,
        uId: "",
      };

    default:
      return state;
  }
};
export default reducer;
