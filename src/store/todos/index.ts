import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TodoState, todoState } from "./state";
import * as templateReducers from './reducer';
import { fetchTodoById, fetchTodos } from "./extraReducers";
import { Todo } from "../../global/interfaces";

export const todoSlice = createSlice({
  name: 'todo',
  initialState: todoState,
  reducers: templateReducers,
  extraReducers:  {
    [fetchTodos.fulfilled as any]: (state: TodoState, { payload }: PayloadAction<Array<Todo>>) => {
      state.todos = payload;
    },
    [fetchTodos.rejected as any]: (state: TodoState) => {
      state.todos = [];
    },
    [fetchTodoById.fulfilled as any]: (state: TodoState, { payload }: PayloadAction<Todo>) => {
      state.currentTodo = payload;
    },
    [fetchTodos.rejected as any]: (state: TodoState) => {
      state.currentTodo = null;
    },
  },
});

export const {
  setTodos: SET_TODOS,
  setCurrentTodo: SET_CURRENT_TODO,
} = todoSlice.actions;
export {
  fetchTodos as FETCH_TODOS,
  fetchTodoById as FETCH_TODO_BY_ID,
} from './extraReducers';
export default todoSlice.reducer;