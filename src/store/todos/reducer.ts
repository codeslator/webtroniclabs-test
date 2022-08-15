import { PayloadAction } from '@reduxjs/toolkit';
import { Todo } from '../../global/interfaces';
import { TodoState } from './state';

export const setTodos = (state: TodoState, { payload }: PayloadAction<Array<Todo>>) => {
  state.todos = payload;
};

export const setCurrentTodo = (state: TodoState, { payload }: PayloadAction<Todo | null>) => {
  state.currentTodo = payload;
};