import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import todoReducer from './slicer/todoSlice';
import userReducer from './slicer/userSlice'


const rootReducer = combineReducers({
  todoReducer,
  userReducer,
});

export default configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});