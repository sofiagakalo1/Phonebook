// import {
//   getAllContacts,
//   addContact,
//   deleteContact,
//   editContact,
// } from '../../services/API/contacts-api';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '../../redux/auth/auth-operations'; ///замінити лише на апі

export const fetchAllContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await instance.get('/contacts');
      // console.log(result);
      return response.data;
    } catch ({ response }) {
      return thunkAPI.rejectWithValue(response.data.message);
    }
  }
);

export const fetchAddContact = createAsyncThunk(
  'contacts/fetchAdd',
  async (data, thunkAPI) => {
    try {
      const response = await instance.post('/contacts', data);
      // console.log(data);
      return response.data;
    } catch ({ response }) {
      return thunkAPI.rejectWithValue(response.data.message);
    }
  }
  // {
  //   condition: ({ name }, { getState }) => {
  //     // console.log(name);
  //     const contacts = getState();
  //     // console.log(contacts.contacts.items);

  //     const contactsItems = contacts.contacts.items;
  //     // console.log(contactsItems);
  //     const searchName = name.toLowerCase();
  //     const result = contactsItems.find(item => {
  //       return searchName === item.name.toLowerCase();
  //     });
  //     if (result) {
  //       alert(`${contacts.name} is already in your contacts!`);
  //       return false;
  //     }
  //   },
  // }
);

export const fetchDeleteContact = createAsyncThunk(
  'contacts/fetchDelete',
  async (id, thunkAPI) => {
    try {
      const response = await instance.delete(`/contacts/${id}`);
      // console.log(response)
      return response.data.id;
    } catch ({ response }) {
      return thunkAPI.rejectWithValue(response.data.message);
    }
  }
);

export const fetchEditContact = createAsyncThunk(
  'contacts/fetchEdit',
  async ({ id, data }, thunkAPI) => {
    try {
      const response = await instance.patch(`/contacts/${id}`, data);
      // console.log(response);
      return response.data;
    } catch ({ response }) {
      return thunkAPI.rejectWithValue(response.data.message);
    }
  }
);
