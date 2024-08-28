import { createSlice } from "@reduxjs/toolkit";
import API from "@/services/API";
// Slice

const slice = createSlice({
  name: "room",
  initialState: {
    room: [],
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
    getRoom: (state, action) => {
      state.room = action.payload;
      state.isLoading = false;
    },
  },
});

export default slice.reducer;

// Actions
const { getRoom, startLoading, hasError } = slice.actions;

export const getRoomApi = () => async (dispatch: any) => {
  dispatch(startLoading());
  try {
    await API
      .get("gameType")
      .then((response: any) => {
        console.log(response?.data)
        dispatch(getRoom(response?.data?.gameTypes || []))
      });
  } catch (e: any) {
    console.error(e.message);
    dispatch(getRoom([]))
    dispatch(hasError(e.message));
  }
};
