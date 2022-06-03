const getIsLoggedIn = state => state.auth.isLoggedIn;
const getUserName = state => state.auth.user.name;
const getUserEmail = state => state.auth.user.email;
const getUserToken = state => state.auth.token;

const authSelectors = {
  getIsLoggedIn,
  getUserName,
  getUserEmail,
  getUserToken,
};
export default authSelectors;
