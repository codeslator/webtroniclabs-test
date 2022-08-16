import { FC } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const AuthLayout: FC = () => {
  return (
    <div className="h-screen flex flex-rows justify-between">
      <div className="hidden md:block md:w-6/12 bg-gray-200 dark:bg-gray-900 border-r border-gray-200">
        <nav className="bg-white px-2 sm:px-4 py-2.5 dark:bg-gray-900 w-full  border-b border-gray-200 dark:border-gray-600">
          <div className="container flex flex-wrap justify-between items-center mx-auto">
            <a href="https://flowbite.com/" className="flex items-center">
              <img src="https://webtroniclabs.com/assets/img/webtronic-logo-text.svg" className="mr-3 h-6 sm:h-9" alt="WebtronicLabs Logo" />
            </a>
            <div className="flex md:order-2">
              <NavLink to="/home" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Back to Home</NavLink>
            </div>
          </div>
        </nav>
      </div>
      <main className="w-full md:w-6/12 my-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default AuthLayout;