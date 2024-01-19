import {configureStore} from '@reduxjs/toolkit';
import pageReducer from './Slice/Page/PageSlice';
import projectReducer from './Slice/Project/ProjectSlice';
export  const store = configureStore({
  reducer:{
    page:pageReducer,
    project:projectReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
  
})