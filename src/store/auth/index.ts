import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthState, authState } from "./state";
import * as authReducers from './reducer';
import { logIn } from './extraReducers';
import { UserAuthenticated, UserNotAuthenticated } from "../../global/interfaces";

export const authSlice = createSlice({
  name: 'auth',
  initialState: authState,
  reducers: authReducers,
  extraReducers: {
    [logIn.fulfilled as any]: (state: AuthState, { payload }: PayloadAction<UserAuthenticated>) => {
      state.isLoading = false;
      state.isAuthenticated = true;
      state.authenticatedUser = payload;
      state.hasError = false;
      state.error = '';
    },
    [logIn.rejected as any]: (state: AuthState, { payload }: PayloadAction<UserNotAuthenticated>) => {
      state.error = payload.message;
      state.hasError = true;
      state.isLoading = false;
    },
  },
});

export const {
  setIsAuthenticated: SET_IS_AUTHENTICATED,
  setIsLoading: SET_IS_LOADING,
  setAuthenticatedUser: SET_AUTHENTICATED_USER,
  logOut: LOGOUT,
} = authSlice.actions;
export { logIn as LOGIN } from './extraReducers';
export default authSlice.reducer;