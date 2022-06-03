import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, fetchCurrentUser } from './authOperations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isPending: false,
  isFulfilled: false,
  isLoggedIn: false,
  isFetchingCurrentUser: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,

  extraReducers: {
    [register.pending](state, action) {
      state.isPending = true;
    },

    [register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.isPending = false;
      state.isFulfilled = true;
    },

    [register.rejected](state, action) {
      state.isPending = false;
    },
    [logIn.pending](state, action) {
      state.isPending = true;
    },
    [logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.isPending = false;
      state.isFulfilled = true;
    },

    [register.rejected](state, action) {
      state.isPending = false;
    },

    [logOut.fulfilled](state, action) {
      state.user = initialState.user;
      state.token = initialState.token;
      state.isLoggedIn = initialState.isLoggedIn;
      state.isPending = false;
    },

    [fetchCurrentUser.pending](state) {
      state.isFetchingCurrentUser = true;
      state.isPending = true;
    },

    [fetchCurrentUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isFetchingCurrentUser = false;
    },
    [fetchCurrentUser.rejected](state, action) {
      state.isFetchingCurrentUser = false;
      state.isPending = false;
    },
  },
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['token'],
};

export const authReducer = persistReducer(persistConfig, authSlice.reducer);
