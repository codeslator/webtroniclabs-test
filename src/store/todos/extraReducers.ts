import { createAsyncThunk } from "@reduxjs/toolkit";
import { TODOS_API_URL } from "../../global";


export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
  const response = await fetch(`${TODOS_API_URL}/todos`);
  const data = await response.json();
  return data;
});


export const fetchTodoById = createAsyncThunk('todos/fetchTodoById', async (todoId: number) => {
  const response = await fetch(`${TODOS_API_URL}/todos/${todoId}`);
  const data = await response.json();
  return data;
});
