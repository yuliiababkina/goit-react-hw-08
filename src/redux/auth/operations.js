import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";

axios.defaults.baseURL = "https://connections-api.goit.global";

//Utility to add JWT
export const setAuthHeader = (token) => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// Utility to remove JWT
export const clearAuthHeader = () => {
    axios.defaults.headers.common.Authorization = "";
};

export const register = createAsyncThunk(
    "auth/register",
    async (credentials, thunkAPI) => {
        try {
            const { data } = await axios.post("/users/signup", credentials);
            setAuthHeader(data.token);
            return data;
        } catch (error) {
            if (error.response.data.code === 11000) {
                toast.error("The user with this email already exist!");
                return thunkAPI.rejectWithValue(error.message);
            }
        }
    }
);

export const login = createAsyncThunk(
    "auth/login",
    async (credentials, thunkAPI) => {
        try {
            const { data } = await axios.post("/users/login", credentials);
            setAuthHeader(data.token);

            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const logout = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
    try {
        const { data } = axios.post("/users/logout");
        clearAuthHeader();
        return data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const refreshUser = createAsyncThunk(
    "auth/refresh",
    async (_, thunkAPI) => {
        const state = thunkAPI.getState();
        const persistedToken = state.auth.token;

        if (persistedToken === null) {
            return thunkAPI.rejectWithValue("Unable to fetch user");
        }

        try {
            setAuthHeader(persistedToken);
            const { data } = await axios.get("/users/current");
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);
