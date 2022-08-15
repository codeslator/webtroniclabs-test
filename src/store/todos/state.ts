import { Todo } from "../../global/interfaces";

export interface TodoState {
  todos: Array<Todo>;
  currentTodo: Todo | null;
  isLoading: boolean;
}

export const todoState: TodoState = {
  todos: [],
  currentTodo: null,
  isLoading: false,
};