// src/store/authSlice.ts

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getToken } from '@/services/API';

interface AuthState {
  isAuthenticated: boolean | null;
}

const initialState: AuthState = {
  isAuthenticated: null,
};

export const checkToken = createAsyncThunk('auth/checkToken', async () => {
  const token = await getToken();
  return !!token;
});

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(checkToken.fulfilled, (state, action) => {
      state.isAuthenticated = action.payload;
    });
    builder.addCase(checkToken.rejected, (state) => {
      state.isAuthenticated = false;
    });
  },
});

export default authSlice.reducer;
