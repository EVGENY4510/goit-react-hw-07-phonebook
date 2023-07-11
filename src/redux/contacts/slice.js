import { createSlice } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    addContact(state, action) {
      return [...state, action.payload];
    },
    deleteContact(state, action) {
      return state.filter(({ id }) => id !== action.payload.id);
    },
  },
});

export const addContact = contactsSlice.actions.addContact;
export const deleteContact = contactsSlice.actions.deleteContact;

export const contactsReducer = contactsSlice.reducer;
