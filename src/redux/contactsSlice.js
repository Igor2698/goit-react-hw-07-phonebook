import { createSlice } from '@reduxjs/toolkit';




export const contactsSlice = createSlice({
    name: 'contacts',
    initialState: { contacts: [] },
    reducers: {
        add(state, action) {
            state.contacts.push(action.payload)
        },

        deleteTask(state, action) {

            const index = state.contacts.findIndex(contact => contact.id === action.payload);
            state.contacts.splice(index, 1);
        },








    }

})







export const { add, deleteTask } = contactsSlice.actions;

