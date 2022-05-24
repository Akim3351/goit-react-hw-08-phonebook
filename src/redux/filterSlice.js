import { createSlice } from '@reduxjs/toolkit';

const initialState = { value: '' };

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilter(state, action) {
      state = action.payload;
    },
  },
});

export const { setFilter } = filterSlice.actions;
export const filterSliceReducer = filterSlice.reducer;
