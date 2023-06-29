import { createSlice } from '@reduxjs/toolkit';

import {
  fetchSignup,
  fetchLogin,
  fetchCurrent,
  fetchLogout,
} from './auth-operations';

const initialState = {
  user: {},
  token: null,
  isLogin: false,
  IsRefreshing: false,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchSignup.pending, store => {
        store.loading = true;
        store.error = null;
      })
      .addCase(fetchSignup.fulfilled, (store, { payload }) => {
        const { user, token } = payload;
        store.loading = false;
        store.user = user;
        store.token = token;
        store.isLogin = true;
        store.error = null;
      })
      .addCase(fetchSignup.rejected, (store, { payload }) => {
        store.loading = false;
        store.error = payload;
      })
      .addCase(fetchLogin.pending, store => {
        store.loading = true;
        store.error = null;
      })
      .addCase(fetchLogin.fulfilled, (store, { payload }) => {
        const { user, token } = payload;
        store.loading = false;
        store.user = user;
        store.token = token;
        store.isLogin = true;
        store.error = null;
      })
      .addCase(fetchLogin.rejected, (store, action) => {
        store.loading = false;
        store.error = action.payload;
      })
      .addCase(fetchLogout.pending, store => {
        store.loading = true;
        store.error = null;
      })
      .addCase(fetchLogout.fulfilled, store => {
        store.user = {};
        store.token = null;
        store.isLogin = false;
        store.isLoading = false;
        store.error = null;
      })
      .addCase(fetchLogout.rejected, (store, { payload }) => {
        store.loading = false;
        store.error = payload;
      })
      .addCase(fetchCurrent.pending, store => {
        store.loading = true;
        store.error = null;
        store.IsRefreshing = true;
      })
      .addCase(fetchCurrent.fulfilled, (store, { payload }) => {
        store.loading = false;
        store.user = payload;
        store.isLogin = true;
        store.IsRefreshing = false;
        store.error = null;
      })
      .addCase(fetchCurrent.rejected, (store, { payload }) => {
        store.loading = false;
        store.error = payload;
        store.token = null;
        store.IsRefreshing = false;
      });
  },
});

export default authSlice.reducer;