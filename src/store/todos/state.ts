import { Todo } from "../../global/interfaces";

export interface TodoState {
  todos: Array<Todo>;
  currentTodo: Todo | null;
  isLoading: boolean;
  hasError: boolean;
  error: string;
}

export const todoState: TodoState = {
  todos: [],
  currentTodo: null,
  isLoading: false,
  hasError: false,
  error: '',
};