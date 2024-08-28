import { createSlice } from "@reduxjs/toolkit";
import SocketSingleton from "@/helpers/socket";
import { BACKEND_URL } from "@/config/index";

// Slice
const slice = createSlice({
  name: "AllPlayers",
  initialState: {
    allPlayers: [],
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
    getallPlayersData: (state, action) => {
      state.allPlayers = action.payload;
      state.isLoading = false;
    },
  },
});

export default slice.reducer;

// Actions
const { getallPlayersData, startLoading, hasError } = slice.actions;

export const getallPlayersDataApi = (data: any) => async (dispatch: any) => {
  const socket = SocketSingleton.getInstance(BACKEND_URL);
  dispatch(startLoading());
  try {
    socket.on('playerDataToClient', (data) => {
      if (data) {
        dispatch(getallPlayersData(data));
      }
    });
  } catch (e: any) {
    console.error(e.message);
    dispatch(getallPlayersData([]))
    dispatch(hasError(e.message));
  }
};


export const updateallPlayers = (data: any, where: any) => async (dispatch: any) => {
  if (data) {
    console.log(where, 'tttttttttttttttttttttttttttttttttttttttttt',data)
    dispatch(getallPlayersData(data));
  }
}
