export const SET_SESSION_TOKEN = "SET_SESSION_TOKEN";

export const setSessionToken = (token) => ({
  type: SET_SESSION_TOKEN,
  payload: token,
});
