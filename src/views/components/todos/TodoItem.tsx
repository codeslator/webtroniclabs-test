import { FC } from 'react'
import { Todo } from '../../../global/interfaces';

const TodoItem: FC<Todo> = ({ userId, title, completed }) => {
  return (
    <li className="py-3 sm:py-4 cursor-pointer">
      <div className="flex items-center space-x-4">
        <div className="flex-shrink-0">
          <img className="w-8 h-8 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-1.jpg" alt="Neil image" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
            {title}
          </p>
          <span className={`${completed ? 'bg-green-100 text-green-800 dark:bg-green-200 dark:text-green-900' : 'bg-red-100 text-red-800 dark:bg-red-200 dark:text-red-900'} text-xs font-semibold mr-2 px-2.5 py-0.5 rounded`}>
            {completed ? 'Completed' : 'Not Completed'}
          </span>
        </div>
      </div>
    </li>
  );
};

export default TodoItem;