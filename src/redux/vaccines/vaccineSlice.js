import {createSlice} from '@reduxjs/toolkit';

const initialValues = {
  id: null,
  date: null,
  vaccine: null,
  dose: null,
  uploadUrl: null,
  nextDate: null,
  userId: null,
};

export const vaccineSlice = createSlice({
  name: 'vaccine',
  initialState: initialValues,
  reducers: {
    reducerSetVaccine: (state, action) => {
      (state.id = action.payload.id),
        (state.date = action.payload.date),
        (state.vaccine = action.payload.vaccine),
        (state.dose = action.payload.dose),
        (state.uploadUrl = action.payload.uploadUrl),
        (state.nextDate = action.payload.nextDate),
        (state.userId = action.payload.userId);
    },
  },
});

export const {reducerSetVaccine} = vaccineSlice.actions;

export default vaccineSlice.reducer;
