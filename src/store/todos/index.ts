import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TodoState, todoState } from "./state";
import * as templateReducers from './reducer';
import { fetchTodoById, fetchTodos } from "./extraReducers";
import { ErrorPayload, Todo } from "../../global/interfaces";

export const todoSlice = createSlice({
  name: 'todo',
  initialState: todoState,
  reducers: templateReducers,
  extraReducers:  {
    [fetchTodos.pending as any]: (state: TodoState) => {
      state.isLoading = true;
    },
    [fetchTodos.fulfilled as any]: (state: TodoState, { payload }: PayloadAction<Array<Todo>>) => {
      state.todos = payload;
      state.isLoading = false;
      state.hasError = false;
      state.error = '';
    },
    [fetchTodos.rejected as any]: (state: TodoState, { payload }: PayloadAction<ErrorPayload>) => {
      state.todos = [];
      state.isLoading = false;
      state.hasError = true;
      state.error = payload.message;
    },
    [fetchTodoById.pending as any]: (state: TodoState) => {
      state.isLoading = true;
    },
    [fetchTodoById.fulfilled as any]: (state: TodoState, { payload }: PayloadAction<Todo>) => {
      state.currentTodo = payload;
      state.isLoading = false;
      state.hasError = false;
      state.error = '';
    },
    [fetchTodos.rejected as any]: (state: TodoState, { payload }: PayloadAction<ErrorPayload>) => {
      state.currentTodo = null;
      state.isLoading = false;
      state.hasError = true;
      state.error = payload.message;
    },
  },
});

export const {
  setTodos: SET_TODOS,
  setCurrentTodo: SET_CURRENT_TODO,
  setIsLoading: SET_IS_LOADING,
} = todoSlice.actions;
export {
  fetchTodos as FETCH_TODOS,
  fetchTodoById as FETCH_TODO_BY_ID,
} from './extraReducers';
export default todoSlice.reducer;