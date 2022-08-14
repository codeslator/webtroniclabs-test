import { createSlice } from "@reduxjs/toolkit";
import { UiState, uiState } from "./state";
import * as uiReducers from './reducer';
import { asyncAction } from './extraReducers';

export const uiSlice = createSlice({
  name: 'ui',
  initialState: uiState,
  reducers: uiReducers,
});

export const { toggleOpenMenu: TOGGLE_OPEN_MENU } = uiSlice.actions;
export default uiSlice.reducer;