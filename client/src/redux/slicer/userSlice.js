import { createSlice } from '@reduxjs/toolkit';
import { userRegistration, userLogin, userLogOut, userRefresh } from '../action/userActionCreator';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    userName: '',
    userId: '',
    isAuth: false
  },
  extraReducers: {
    [userRegistration.fulfilled]: (state, { payload }) => {
      state.userName = payload.name;
      console.log(state.userName);
      state.userId = payload.id;
    },

    [userLogin.fulfilled]: (state, { payload }) => {
      state.userName = payload.name;
      state.userId = payload.id;
      state.isAuth = true;
    },
    [userLogin.rejected]: (state) => {
      state.userName = '';
      state.userId = '';
      state.isAuth = false;
    },

    [userLogOut.fulfilled]: (state, { payload }) => {
      state.userName = '';
      state.userId = '';
      state.isAuth = false;
    },
    [userLogOut.rejected]: (state) => {
      state.userName = '';
      state.userId = '';
      state.isAuth = false;
    },

    [userRefresh.fulfilled]: (state, { payload }) => {
      state.userName = payload.name;
      state.userId = payload.id;
      state.isAuth = true;
    },
    [userRefresh.rejected]: (state) => {
      state.userName = '';
      state.userId = '';
      state.isAuth = false;
    },
  }
});

export const selectUser = (state) => state.userReducer;
export default userSlice.reducer;