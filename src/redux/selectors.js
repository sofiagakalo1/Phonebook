export const isUserLogin = store => store.auth.isLogin;

export const selectToken = store => {
  const token = store.auth.token;
  return token;
};
export const selectIsRefreshing = state => state.auth.isRefreshing;

export const selectUserEmail = store => {
  return store.auth.user.email;
};

export const getAllContacts = state => state.contacts.items;

export const selectContactById = (state, contactId) => {
  return state.contacts.items.find(contact => contact.id === contactId);
};

export const getFilter = store => store.filter;

export const getFilteredContacts = (filter, contacts) => {
  const normalizedFilter = filter.toLowerCase();
  const result = contacts.filter(({ name }) => {
    return name.toLowerCase().includes(normalizedFilter);
  });
  return result;
};
