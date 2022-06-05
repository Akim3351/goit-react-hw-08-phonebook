import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const register = createAsyncThunk('auth/register', async credentials => {
  try {
    const { data } = await axios.post('/users/signup', credentials);
    toast.success(
      `Hello, ${data.user.name}! Let's start saving your contacts!`
    );
    token.set(data.token);
    return data;
  } catch (error) {
    console.log(error);
    toast.error(
      `Oops!! Something has gone wrong: ${error.message}. Try again or call administrator for help!`
    );
    throw new Error(error.message);
  }
});

export const login = createAsyncThunk('auth/login', async credentials => {
  try {
    const { data } = await axios.post('/users/login', credentials);
    token.set(data.token);
    toast.success(`Hello, ${data.user.name}!`);
    return data;
  } catch (error) {
    console.log(error);
    toast.error(
      `Oops!! Something has gone wrong: ${error.message}. Try again or call administrator for help!`
    );
    throw new Error(error.message);
  }
});

export const logOut = createAsyncThunk('auth/logout', async () => {
  try {
    await axios.post('/users/logout');
    token.unset();
  } catch (error) {
    console.log(error);
    toast.error(
      `Oops!! Something has gone wrong: ${error.message}. Try again or call administrator for help!`
    );
    throw new Error(error.message);
  }
});

export const fetchCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue();
    }

    token.set(persistedToken);
    try {
      const { data } = await axios.get('/users/current');
      return data;
    } catch (error) {
      console.log(error);
      toast.error(
        `Oops!! Something has gone wrong. Try again or call administrator for help!`
      );
    }
  }
);
