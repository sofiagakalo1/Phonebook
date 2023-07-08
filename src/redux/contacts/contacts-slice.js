import { createSlice } from '@reduxjs/toolkit';
import {
  fetchAllContacts,
  fetchAddContact,
  fetchDeleteContact,
  fetchEditContact,
} from '../contacts/contacts-operations';

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchAllContacts.pending, store => {
        store.loading = true;
      })
      .addCase(fetchAllContacts.fulfilled, (store, { payload }) => {
        store.loading = false;
        store.error = null;
        store.items = payload;
      })
      .addCase(fetchAllContacts.rejected, (store, { payload }) => {
        store.loading = false;
        store.error = payload;
      })
      .addCase(fetchAddContact.pending, store => {
        store.loading = true;
      })
      .addCase(fetchAddContact.fulfilled, (store, { payload }) => {
        store.loading = false;
        store.error = null;
        store.items.push(payload);
      })
      .addCase(fetchAddContact.rejected, (store, { payload }) => {
        store.loading = false;
        store.error = payload;
      })
      .addCase(fetchDeleteContact.pending, store => {
        store.loading = true;
      })
      .addCase(fetchDeleteContact.fulfilled, (store, { payload }) => {
        store.loading = false;
        store.error = null;
        store.items = store.items.filter(contact => contact.id !== payload);
      })
      .addCase(fetchDeleteContact.rejected, (store, { payload }) => {
        store.loading = false;
        store.error = payload;
      })
      .addCase(fetchEditContact.pending, store => {
        store.loading = true;
      })
      .addCase(fetchEditContact.fulfilled, (store, { payload }) => {
        store.loading = false;
        store.error = null;
        const editedContactIndex = store.items.findIndex(
          contact => contact.id === payload.id
        );
        if (editedContactIndex !== -1) {
          store.items[editedContactIndex] = payload;
        }
      })
      .addCase(fetchEditContact.rejected, (store, { payload }) => {
        store.loading = false;
        store.error = payload;
      });
  },
});

export default contactsSlice.reducer;
