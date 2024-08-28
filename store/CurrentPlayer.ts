import { createSlice } from "@reduxjs/toolkit";
import SocketSingleton from "@/helpers/socket";
import { BACKEND_URL } from "@/config/index";

// Slice
const slice = createSlice({
  name: "Currentplayer",
  initialState: {
    currentplayer: null,
    isLoading: false,
    error: false,
  },
  reducers: {
    startLoading: (state) => {
      state.isLoading = true;
    },
    hasError: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    getcurrentplayer: (state, action) => {
      state.currentplayer = action.payload;
      state.isLoading = false;
    },
  },
});

export default slice.reducer;

// Actions
const { getcurrentplayer, startLoading, hasError } = slice.actions;


export const updateCurrentPlayer = (data: any) => async (dispatch: any) => {
  if (data) {
    dispatch(getcurrentplayer(data));
  }
}
