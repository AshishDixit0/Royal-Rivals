// src/store/authSlice.ts

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getToken } from '@/services/API';
import { logoutAPI, loginAPI, signupAPI } from '@/services/AuthAPI';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthState } from '@/interface/auth.interface';

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
  // await logoutAPI();
  await AsyncStorage.removeItem('token');
  await getToken();
})

export const signup = createAsyncThunk('auth/login', async (data: any) => {
  const userData = await signupAPI(data);
  await AsyncStorage.setItem('token', userData?.data?.token);
  await getToken();
  
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
    builder.addCase(signup.fulfilled, (state, action) => {
      console.log('this is the action: ', action.payload.data);
      
      state.token = action?.payload?.data?.token
      state.user = action.payload.data?.user
      state.isAuthenticated = true;
    })
    builder.addCase(signup.rejected, (state, action) => {
      console.log('this is the error: ', action.payload);      
    })
    builder.addCase(logout.fulfilled, (state) => {
      state.isAuthenticated = false;
      state.user = '';
      state.token = '';
    })
  },
});

export default authSlice.reducer;
