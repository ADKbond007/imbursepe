export const LoginAction = (payload, uId) => {
  return {
    type: "LOGIN_ACTION",
    payload: payload,
    uId: uId,
  };
};
