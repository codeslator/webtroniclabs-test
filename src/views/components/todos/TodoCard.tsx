import { FC } from 'react'
import { useTodo } from '../../../hooks';

const TodoCard: FC = () => {
  const { currentTodo } = useTodo();

  return (
    <div className="w-full lg:h-[200px] flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
      <img className="object-cover w-full h-full lg:h-[200px] rounded-t-lg md:w-48 md:rounded-none md:rounded-l-lg" src={`https://ui-avatars.com/api/?format=svg&background=random&name=${currentTodo?.title}`} alt="" />
      <div className="p-4">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{currentTodo?.title}</h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">User ID: #{currentTodo?.userId}</p>
        <span className={`${currentTodo?.completed ? 'bg-green-100 text-green-800 dark:bg-green-200 dark:text-green-900' : 'bg-red-100 text-red-800 dark:bg-red-200 dark:text-red-900'} text-xs font-semibold mr-2 px-2.5 py-0.5 rounded`}>
          {currentTodo?.completed ? 'Completed' : 'Not Completed'}
        </span>
      </div>
    </div>
  );
};

export default TodoCard;