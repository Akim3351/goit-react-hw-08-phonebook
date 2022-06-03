const getIsLoggedIn = state => state.auth.isLoggedIn;
const getUserName = state => state.auth.user.name;
const getUserEmail = state => state.auth.user.email;
const getUserToken = state => state.auth.token;
const getIsFulfilled = state => state.auth.isFulfilled;
const getIsPending = state => state.auth.isPending;

const authSelectors = {
  getIsLoggedIn,
  getUserName,
  getUserEmail,
  getUserToken,
  getIsFulfilled,
  getIsPending,
};
export default authSelectors;
