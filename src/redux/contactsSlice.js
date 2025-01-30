import { createSelector, createSlice } from "@reduxjs/toolkit";
import { addContact, fetchContacts, deleteContact } from "./contactsOps";
import { selectNameFilter } from "./filtersSlice";

const slice = createSlice({
    name: "contacts",
    initialState: {
        items: [],
        loading: false,
        error: null,
    },

    extraReducers: (builder) => {
        builder
            .addCase(fetchContacts.fulfilled, (state, action) => {
                state.items = action.payload;
                state.loading = false;
            })
            .addCase(fetchContacts.rejected, (state, action) => {
                state.error = action.payload;
                state.loading = false;
            })
            .addCase(fetchContacts.pending, (state, action) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(deleteContact.fulfilled, (state, action) => {
                state.items = state.items.filter(
                    (item) => item.id !== action.payload.id
                );
            })
            .addCase(addContact.fulfilled, (state, action) => {
                state.items.push(action.payload);
            });
    },
});

export const contactsReducer = slice.reducer;

export const selectContacts = (state) => state.contacts.items;
export const selectLoading = (state) => state.contacts.loading;
export const selectError = (state) => state.contacts.error;

export const selectFilteredContacts = createSelector(
    [selectContacts, selectNameFilter],
    (contacts, filter) =>
        contacts.filter((contact) =>
            contact.name.toLowerCase().includes(filter.toLowerCase())
        )
);
