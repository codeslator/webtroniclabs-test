import { createSlice } from "@reduxjs/toolkit";
import { AuthState, templateState } from "./state";
import * as templateReducers from './reducer';
import { asyncAction } from './extraReducers';

export const authSlice = createSlice({
  name: 'template',
  initialState: templateState,
  reducers: templateReducers,
  extraReducers: (builder) => {
    builder.addCase(asyncAction.fulfilled, (state: AuthState, { payload }) => {

    })
  },
});

export const { setIsAuthenticated } = authSlice.actions;
export default authSlice.reducer;