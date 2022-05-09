import { createSlice } from '@reduxjs/toolkit';
import {
  getTodos, addTodo, deleteTodo, changeState,
} from '../action/todoActionCreator';

export const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    value: [],
  },
  extraReducers: {
    [getTodos.fulfilled]: (state, { payload }) => {
      state.value = payload;
    },

    [addTodo.fulfilled]: (state, { payload }) => {
      state.value.push(payload);
    },

    [deleteTodo.fulfilled]: (state, { payload }) => {
      state.value = state.value.filter((item) => item.id != payload);
    },

    [changeState.fulfilled]: (state, { payload }) => {
      state.value = state.value.map((item) => {
        if (item.id == payload) {
          item.done = !item.done;
          return item;
        }
        return item;
      });
    },
  },
});

export const selectTodo = (state) => state.todoReducer.value;
export default todoSlice.reducer;