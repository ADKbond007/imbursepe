const initialState = {
  isLoggedIn: false,
  uId: "",
};

const red = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_ACTION":
      console.log("Login Success");
      return {
        ...state,
        isLoggedIn: true,
        uId: action.uId,
      };

    default:
      return state;
  }
};
export default red;
