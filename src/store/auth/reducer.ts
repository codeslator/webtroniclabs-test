import { PayloadAction } from '@reduxjs/toolkit';
import { AuthState } from './state';

export const setIsAuthenticated = (state: AuthState, { payload }: PayloadAction<boolean>) => {
  state.isAuthenticated = payload;
};