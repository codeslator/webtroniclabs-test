import { FC } from 'react';
import TodoItem from './TodoItem';

const TodoList: FC = () => {
  return (
    <div className="p-4 w-full bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
      <div className="flex justify-between items-center mb-4">
        <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Latest Todos</h5>
        {/* <a href="#" className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
          View all
        </a> */}
      </div>
      <div className="flow-root ">
        <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700 h-[400px] overflow-y-auto">
          <TodoItem title="Hello world" completed={false} userId={1} />
          <TodoItem title="Hello world" completed={true} userId={1} />
          <TodoItem title="Hello world" completed={true} userId={1} />
          <TodoItem title="Hello world" completed={true} userId={1} />
          <TodoItem title="Hello world" completed={true} userId={1} />
          <TodoItem title="Hello world" completed={true} userId={1} />
          <TodoItem title="Hello world" completed={true} userId={1} />
          <TodoItem title="Hello world" completed={true} userId={1} />
          <TodoItem title="Hello world" completed={true} userId={1} />
          <TodoItem title="Hello world" completed={true} userId={1} />
        </ul>
      </div>
    </div>
  );
};

export default TodoList;