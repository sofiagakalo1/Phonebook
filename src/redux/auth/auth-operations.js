import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
// import { signup, login, current, logout } from '../../services/API/auth-api';
import { toast } from 'react-toastify';

export const instance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

const setToken = token => {
  instance.defaults.headers.common.authorization = `Bearer ${token}`;
};
const deleteToken = () => {
  instance.defaults.headers.common.authorization = '';
};

export const fetchSignup = createAsyncThunk(
  'auth/signup',
  async (userData, thunkAPI) => {
    try {
      const response = await instance.post('/users/signup', userData);
      setToken(response.data.token);
      return response.data;
    } catch (error) {
      // console.log(error.response.data);
      console.log(error.response.data.code);

      if (error.response.data.code === 11000) {
        toast.error('User with this email already exists.');
        return thunkAPI.rejectWithValue({
          message: 'User with this email already exists.',
        });
      }
      return thunkAPI.rejectWithValue(error.response.message);
    }
  }
);

export const fetchLogin = createAsyncThunk(
  'auth/login',
  async (userData, thunkAPI) => {
    try {
      const response = await instance.post('/users/login', userData);
      // console.log(response);
      setToken(response.data.token);
      return response.data;
    } catch (error) {
      toast.error('Email or password is incorrect.');
      return thunkAPI.rejectWithValue({ message: 'Email or password is incorrect.' });
    }
  }
);

export const fetchLogout = createAsyncThunk(
  'auth/logout',
  async (_, thunkAPI) => {
    try {
      await instance.post('/users/logout');
      deleteToken();
    } catch ({ response }) {
      return thunkAPI.rejectWithValue(response);
    }
  }
);

export const fetchCurrent = createAsyncThunk(
  'aut/current',
  async (_, { rejectWithValue, getState }) => {
    const state = getState();
    const currentToken = state.auth.token;
    try {
      setToken(currentToken);
      const response = await instance.get('/users/current');
      // console.log(response);
      return response.data;
    } catch ({ response }) {
      return rejectWithValue(response);
    }
  },
  {
    condition: (_, { getState }) => {
      const { auth } = getState();
      /*якщо токену немає, то запит на його валідність не відбудеться*/
      if (!auth.token) {
        return false;
      }
    },
  }
);
