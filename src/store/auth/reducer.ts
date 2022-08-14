import { PayloadAction } from '@reduxjs/toolkit';
import { UserAuthenticated } from '../../global/interfaces';
import { AuthState } from './state';

export const setIsAuthenticated = (state: AuthState, { payload }: PayloadAction<boolean>) => {
  state.isAuthenticated = payload;
};

export const setIsLoading = (state: AuthState, { payload }: PayloadAction<boolean>) => {
  state.isLoading = payload;
};

export const setAuthenticatedUser = (state: AuthState, { payload }: PayloadAction<UserAuthenticated | null>) => {
  state.authenticatedUser = payload;
};

export const logOut = (state: AuthState) => {
  state.authenticatedUser = null;
  state.isAuthenticated = false;
  state.isLoading = false;
};
