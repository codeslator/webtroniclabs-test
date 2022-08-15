import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import authReducer from './auth';
import uiReducer from './ui';
import todoReducer from './todos';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    ui: uiReducer,
    todo: todoReducer,
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