import { createAsyncThunk } from "@reduxjs/toolkit";


export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos');
  const data = await response.json();
  return data;
});


export const fetchTodoById = createAsyncThunk('todos/fetchTodoById', async (todoId: number) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`);
  const data = await response.json();
  return data;
});
