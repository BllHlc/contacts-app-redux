import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';

const contactAdapter = createEntityAdapter();
const initialState = contactAdapter.getInitialState();

export const contactSelectors = contactAdapter.getSelectors((state) => state.contact);

export const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    addContact: contactAdapter.addOne,
    deleteContact: contactAdapter.removeOne,
    editContact: contactAdapter.updateOne,
    clearContacts: contactAdapter.removeAll,
  },
});

export const { addContact, deleteContact, editContact, clearContacts } = contactSlice.actions;

export default contactSlice.reducer;