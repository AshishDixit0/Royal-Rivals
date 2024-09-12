import { combineReducers } from "@reduxjs/toolkit";
import gameSlice from "./Reducers/gameSlice";

const rootReducer = combineReducers({
    game: gameSlice
})

export default rootReducer