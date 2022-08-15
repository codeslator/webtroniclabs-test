import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import authReducer from './auth';
import uiReducer from './ui';
import todoReducer from './todos';
import pokedexReducer from './pokemon';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    ui: uiReducer,
    todo: todoReducer,
    pokedex: pokedexReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;