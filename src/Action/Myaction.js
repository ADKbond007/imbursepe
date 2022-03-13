export const LoginAction = () => {
  return {
    type: "LOGIN_ACTION",
  };
};
export const UpdateUserData = (data) => {
  console.log("Data from action", data);
  return {
    type: "UPDATE_USER_DATA",
    payload: data,
  };
};
export const LogoutAction = (payload, uId) => {
  return {
    type: "LOGOUT_ACTION",
    payload: payload,
    uId: uId,
  };
};
