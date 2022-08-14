import { FC } from 'react'
import TodoList from '../components/todos/TodoList';

const TodosPage: FC = () => {
  return (
    <div className="mx-auto w-11/12">
      <p className="text-white text-3xl my-5">ToDos List</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <TodoList />
      </div>

    </div>
  );
};

export default TodosPage;