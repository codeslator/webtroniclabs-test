import { useAppDispatch, useAppSelector } from ".";
import { selectTodoState } from "../store/selectors";
import { FETCH_TODOS, FETCH_TODO_BY_ID } from "../store/todos";

const useTodo = () => {
  const { todos, currentTodo } = useAppSelector(selectTodoState);
  const dispatch = useAppDispatch();


  const fetchTodos = () => {
    dispatch(FETCH_TODOS());
  };

  const fetchTodoById = (todoId: number) => {
    dispatch(FETCH_TODO_BY_ID(todoId));
  };

  return {
    todos,
    currentTodo,
    fetchTodoById,
    fetchTodos,
  }
};

export default useTodo;