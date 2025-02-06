import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import {
    addContact,
    fetchContacts,
    deleteContact,
    editContact,
} from "./operations";
import { logout } from "../auth/operations";

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
                state.error = null;
            })
            .addCase(addContact.fulfilled, (state, action) => {
                state.items.push(action.payload);
                state.loading = false;
                state.error = null;
            })
            .addCase(deleteContact.fulfilled, (state, action) => {
                state.items = state.items.filter(
                    (item) => item.id !== action.payload.id
                );
                state.loading = false;
                state.error = null;
            })
            .addCase(editContact.fulfilled, (state, action) => {
                const item = state.items.find(
                    (item) => item.id === action.payload.id
                );
                item.name = action.payload.name;
                item.number = action.payload.number;
            })
            .addCase(logout.fulfilled, (state) => {
                state.items = [];
                state.loading = false;
                state.error = null;
            })
            .addMatcher(
                isAnyOf(
                    fetchContacts.pending,
                    addContact.pending,
                    deleteContact.pending
                ),
                (state) => {
                    state.loading = true;
                    state.error = null;
                }
            )
            .addMatcher(
                isAnyOf(
                    fetchContacts.rejected,
                    addContact.rejected,
                    deleteContact.rejected
                ),
                (state, action) => {
                    state.error = action.payload;
                    state.loading = false;
                }
            );
    },
});

export const contactsReducer = slice.reducer;
