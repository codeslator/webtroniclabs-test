import { createAsyncThunk } from "@reduxjs/toolkit";


export const asyncAction = createAsyncThunk('template/asyncAction', async () => {
  const response = await fetch('?');
  const { data } = await response.json();
  return data;
})