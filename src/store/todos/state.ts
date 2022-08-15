import { Todo } from "../../global/interfaces";

export interface TodoState {
  todos: Array<Todo>;
  currentTodo: Todo | null;
}

export const todoState: TodoState = {
  todos: [],
  currentTodo: null,
};