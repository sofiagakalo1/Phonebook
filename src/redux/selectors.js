export const isUserLogin = store => store.auth.isLogin;

export const selectToken = store => {
  const token = store.auth.token;
  return token;
};
export const selectIsRefreshing = state => state.auth.isRefreshing;