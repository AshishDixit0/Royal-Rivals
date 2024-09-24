import { configureStore, combineReducers } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  persistReducer,
  persistStore,
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE
} from 'redux-persist';
import authReducer from './AuthSlice';
import gameReducer from './Reducers/gameSlice';

// Combine the reducers
const rootReducer = combineReducers({
  auth: authReducer,  // This will not be persisted
  game: gameReducer,  // This will be persisted
});

// Persist configuration for the `game` reducer
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,  // Use AsyncStorage from react-native-async-storage
  whitelist: ['game'],  // Only `game` state will be persisted
};

// Apply `persistReducer` to the combined reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create the store with the persisted reducer
export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REGISTER, REHYDRATE, PAUSE, PURGE, PERSIST],
      },
    }),
});

// Persistor to persist the store
export const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;