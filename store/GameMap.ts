import { createSlice } from "@reduxjs/toolkit";
import SocketSingleton from "@/helpers/socket";
import { BACKEND_URL } from "@/config";

// Slice
const slice = createSlice({
  name: "GameMap",
  initialState: {
    map: null,
    isLoading: false,
    error: null, // Changed to null to better represent absence of error
  },
  reducers: {
    startLoading: (state) => {
      state.isLoading = true;
    },
    hasError: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    getMapData: (state, action) => {
      state.map = action.payload;
      state.isLoading = false;
      state.error = null; // Reset error state when new map data is received
    },
  },
});

export default slice.reducer;

// Actions
const { getMapData, startLoading, hasError } = slice.actions;

export const getMapDataApi = () => async (dispatch: any) => {
  const socket = SocketSingleton.getInstance(BACKEND_URL);
  socket.connect();
  dispatch(startLoading());
  try {
    socket.on('MapDataToClient', (data) => {
      if (data) {
        dispatch(getMapData(data));
      }
    });
  } catch (e: any) {
    console.error("Error occurred while fetching map data:", e.message);
    dispatch(hasError(e.message));
  }
};


export const updateGameMap = (data: any) => async (dispatch: any) => {
  dispatch(getMapData(data)); // Simply dispatching getMapData with the received data
};
