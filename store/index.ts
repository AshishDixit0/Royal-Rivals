import { configureStore } from '@reduxjs/toolkit';
import authReducer from './AuthSlice';
import gameReducer from './Reducers/gameSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    game: gameReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {auth: AuthState, game: GameState}
export type AppDispatch = typeof store.dispatch;
