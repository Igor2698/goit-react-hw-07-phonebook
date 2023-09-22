import { createSelector } from "@reduxjs/toolkit";

export const selectContacts = state => state.contacts.contacts;
export const selectFilter = state => state.filter

export const selectVisibleContacts = createSelector([selectContacts, selectFilter],
    (contacts, filter) => { const normalizedFilter = filter.toLowerCase(); return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter)) })


