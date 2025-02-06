import { createSlice } from "@reduxjs/toolkit";
import { login, logout, refreshUser, register } from "./operations";

const slice = createSlice({
    name: "auth",
    initialState: {
        user: {
            name: null,
            email: null,
        },
        token: null,
        isLoggedIn: false,
        isRefreshing: false,
    },
    extraReducers: (builder) => {
        builder
            .addCase(register.fulfilled, (state, action) => {
                state.user = action.payload.user;
                state.isLoggedIn = true;
                state.token = action.payload.token;
            })
            .addCase(login.fulfilled, (state, action) => {
                state.user = action.payload.user;
                state.isLoggedIn = true;
                state.token = action.payload.token;
            })
            .addCase(logout.fulfilled, (state) => {
                state.user = {
                    name: null,
                    email: null,
                };
                state.isLoggedIn = false;
                state.token = null;
            })
            .addCase(refreshUser.pending, (state) => {
                state.isRefreshing = true;
            })
            .addCase(refreshUser.fulfilled, (state, action) => {
                state.user.name = action.payload.name;
                state.user.email = action.payload.email;
                state.isLoggedIn = true;
                state.isRefreshing = false;
            })
            .addCase(refreshUser.rejected, (state) => {
                state.isRefreshing = false;
            });
    },
});

export const authReducer = slice.reducer;
