import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const userRegistration = createAsyncThunk('userRegistration', async ({ name, email, password, repeatPassword }) => {
  let user;
  try {
    user = await axios.post('/user/registration', { name, email, password, repeatPassword });
  } catch (error) {
    console.log(error);
  }
  console.log(user);
  return user.data.newUser;
});

export const userLogin = createAsyncThunk('userLogin', async ({ email, password }) => {
  let user;
  try {
    user = await axios.post('/user/login', { email, password });
  } catch (error) {
    console.log(error);
  }
  return user.data.user;
});

export const userLogOut = createAsyncThunk('userLogOut', async () => {
  let logOut;
  try {
    logOut = await axios('/user/logout');
  } catch (error) {
    console.log(error);
  }
  return logOut.data;
});

export const userRefresh = createAsyncThunk('userRefresh', async () => {
  let user;
  try {
    user = await axios('/user/refresh');
  } catch (error) {
    console.log(error);
  }
  return user.data;
});