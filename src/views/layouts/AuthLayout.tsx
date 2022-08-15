import { FC } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const AuthLayout: FC = () => {
  return (
    <div className="h-screen flex flex-rows justify-between">
      <div className="hidden md:block md:w-6/12 bg-gray-900 p-5">
        <NavLink to="/home" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Back to Home</NavLink>
      </div>
      <main className="w-full md:w-6/12 my-auto">
        <Outlet />
      </main>
    </div>
  )
}

export default AuthLayout