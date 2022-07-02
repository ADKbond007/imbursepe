const initialState = {
  payload: "Hellopayload",
  userData: {},
  uId: "",
  currentPath: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_ACTION":
      console.log("Login Success");
      return {
        ...state,
      };
    case "UPDATE_USER_DATA":
      console.log("update payload", action.payload);
      return {
        ...state,
        userData: action.payload,
      };
    case "LOGOUT_ACTION":
      console.log("Logout success");
      return {
        ...state,
        uId: state.userData.uid,
      };
    case "SET_PATH":
      return {
        ...state,
        currentPath: action.payload,
      };

    default:
      return state;
  }
};
export default reducer;
