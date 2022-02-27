export const LoginAction = (payload, uId) => {
  return {
    type: "LOGIN_ACTION",
    payload: payload,
    uId: uId,
  };
};
export const LogoutAction = (payload, uId) => {
  return {
    type: "LOGOUT_ACTION",
    payload: payload,
    uId: uId,
  };
};
