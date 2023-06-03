import {configureStore} from '@reduxjs/toolkit';
import userSlice from './users/userSlice';
import vaccineSlice from './vaccines/vaccineSlice';

export const Store = configureStore({
  reducer: {
    user: userSlice,
    vaccine: vaccineSlice,
  },
});
