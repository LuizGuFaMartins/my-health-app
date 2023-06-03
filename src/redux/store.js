import {configureStore} from '@reduxjs/toolkit';
import userSlice from './users/userSlice';

export const Store = configureStore({
  reducer: {
    user: userSlice,
  },
});
