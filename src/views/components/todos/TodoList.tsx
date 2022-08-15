import { FC } from 'react';
import { useTodo } from '../../../hooks';
import TodoItem from './TodoItem';

const TodoList: FC = () => {
  const { todos } = useTodo();
  return (
    <div className="py-4 w-full bg-white rounded-lg border shadow-md dark:bg-gray-800 dark:border-gray-700">
      <div className="flex justify-between items-center mb-4 p-8">
        <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Latest Todos</h5>
      </div>
      <div className="flow-root ">
        <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700 h-[400px] overflow-y-auto ">
          {todos.map(({ title, id, userId, completed }) => (
            <TodoItem
              title={title}
              completed={completed}
              userId={userId}
              id={id}
              key={id}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;