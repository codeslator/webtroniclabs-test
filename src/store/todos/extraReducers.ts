import { createAsyncThunk } from "@reduxjs/toolkit";
import { TODOS_API_URL } from "../../global";

export const fetchTodos = createAsyncThunk('todos/fetchTodos', async (_, { rejectWithValue }) => {
  try {
    const response = await fetch(`${TODOS_API_URL}/todos`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    return data;
  }
  catch (e) {
    return rejectWithValue({
      message: 'Something went wrong. Refresh and try again.',
    });
  }
});

export const fetchTodoById = createAsyncThunk('todos/fetchTodoById', async (todoId: number, { rejectWithValue }) => {
  try {
    const response = await fetch(`${TODOS_API_URL}/todos/${todoId}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    return data;
  }
  catch (e) {
    return rejectWithValue({
      message: 'Something went wrong. Refresh and try again.',
    });
  }
});
