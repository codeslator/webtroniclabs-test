import { createSlice } from "@reduxjs/toolkit";
import { TemplateState, templateState } from "./state";
import * as templateReducers from './reducer';
import { asyncAction } from './extraReducers';

export const templateSlice = createSlice({
  name: 'template',
  initialState: templateState,
  reducers: templateReducers,
  extraReducers: (builder) => {
    builder.addCase(asyncAction.fulfilled, (state: TemplateState, { payload }) => {

    })
  },
});

export const { setTemplateValue } = templateSlice.actions;
export default templateSlice.reducer;