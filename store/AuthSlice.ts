// src/store/authSlice.ts

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getToken } from '@/services/API';
import { logoutAPI, loginAPI } from '@/services/AuthAPI';
import { setToken } from '@/services/API';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface AuthState {
  isAuthenticated: boolean | null;
  user: any | null;
  token: string | null;
}

const initialState: AuthState = {
  isAuthenticated: null,
  user: null,
  token: null,
};

export const checkToken = createAsyncThunk('auth/checkToken', async () => {
  const token = await getToken();
  return !!token;
});

export const logout = createAsyncThunk('auth/logout', async () => {
  const userData = await logoutAPI();
  console.log('this is the logout: ', userData);  

  return ;
})

export const login = createAsyncThunk('auth/login', async (data: any) => {
  const userData = await loginAPI(data);
  await setToken(userData.data.token);
  await AsyncStorage.setItem('token', userData.data.token);
  
  return userData;
})

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
    builder.addCase(login.fulfilled, (state, action) => {
      console.log('this is the builder: ', action.payload.data);
      
      state.token = action?.payload?.data?.data.token
      state.user = action.payload.data?.data.user
    })
    builder.addCase(login.rejected, (state, action) => {
      console.log('this is the error: ', action.payload);      
    })
  },
});

export default authSlice.reducer;
