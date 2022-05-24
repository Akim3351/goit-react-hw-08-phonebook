import { configureStore, createAction, createReducer } from '@reduxjs/toolkit';
import { contactsSlice } from './contactsSlice';

export const setFilter = createAction('filter/set');
const filterReducer = createReducer('', {
  [setFilter]: (state, action) => (state = action.payload),
});

export const store = configureStore({
  reducer: {
    [contactsSlice.reducerPath]: contactsSlice.reducer,
    filter: filterReducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactsSlice.middleware,
  ],
});
