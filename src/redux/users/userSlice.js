import {createSlice} from '@reduxjs/toolkit';

const initialValues = {
  userId: null,
  name: null,
  gender: null,
  birthdayDate: null,
  email: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState: initialValues,
  reducers: {
    reducerSetUser: (state, action) => {
      (state.userId = action.payload.userId),
        (state.name = action.payload.name),
        (state.gender = action.payload.gender),
        (state.birthdayDate = action.payload.birthdayDate),
        (state.email = action.payload.email);
    },
  },
});

export const {reducerSetUser} = userSlice.actions;

export default userSlice.reducer;
