import { FC, useEffect } from 'react'
import { useTodo } from '../../hooks';
import TodoCard from '../components/todos/TodoCard';
import TodoList from '../components/todos/TodoList';

const TodosPage: FC = () => {
  const { fetchTodos, currentTodo } = useTodo();

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div className="mx-auto w-11/12">
      <p className="text-gray-900 dark:text-white text-3xl my-5">ToDos List</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <TodoList />
        {Boolean(currentTodo) && (
          <TodoCard />
        )}
      </div>
    </div>
  );
};

export default TodosPage;