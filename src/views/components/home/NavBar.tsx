import { useState } from "react";
import { NavLink } from "react-router-dom"
import { ROUTES } from "../../../config/navigation";
import { useAuth, useUI } from "../../../hooks";

const webRoutes = [
  {
    name: 'Home',
    to: ROUTES.HOME,
  },
  {
    name: 'Pokemon',
    to: ROUTES.POKEMON,
  },
  {
    name: 'Login',
    to: ROUTES.LOGIN,
  },
  // {
  //   name: 'ToDos',
  //   to: ROUTES.TODOS,
  // },
];

const appRoutes = [
  {
    name: 'ToDos',
    to: ROUTES.TODOS,
  },
];

const NavBar = () => {
  const { openMenu, toggleOpenMenu } = useUI();
  const { isAuthenticated, logout } = useAuth();

  return (
    <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-gray-900">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <a href="https://flowbite.com/" className="flex items-center">
          <img src="https://webtroniclabs.com/assets/img/webtronic-logo-text.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
          {/* <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">WebtronicLabs</span> */}
        </a>
        <button data-collapse-toggle="navbar-default" onClick={toggleOpenMenu} type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
          <span className="sr-only">Open main menu</span>
          <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
        </button>
        <div className={`${!openMenu ? 'hidden' : 'inline'} w-full md:block md:w-auto`} id="navbar-default">
          <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {!isAuthenticated ? (
              <>
                {webRoutes.map(({ name, to }) => (
                  <li>
                    <NavLink to={to} className={({ isActive }) => `block py-2 pr-4 pl-3 text-white  ${isActive ? 'bg-blue-700' : 'bg-transparent'} rounded md:bg-transparent ${isActive ? 'md:text-blue-700' : 'md:hover:text-blue-700'} md:p-0 dark:text-white`} aria-current="page">{name}</NavLink>
                  </li>
                ))}
              </>
            ) : (
              <>
                {appRoutes.map(({ name, to }) => (
                  <li>
                    <NavLink to={to} className={({ isActive }) => `block py-2 pr-4 pl-3 text-white  ${isActive ? 'bg-blue-700' : 'bg-transparent'} rounded md:bg-transparent ${isActive ? 'md:text-blue-700' : 'md:hover:text-blue-700'} md:p-0 dark:text-white`} aria-current="page">{name}</NavLink>
                  </li>
                ))}
                <NavLink to="/home" onClick={logout} className={({ isActive }) => `block py-2 pr-4 pl-3 text-white  ${isActive ? 'bg-blue-700' : 'bg-transparent'} rounded md:bg-transparent ${isActive ? 'md:text-blue-700' : 'md:hover:text-blue-700'} md:p-0 dark:text-white`} aria-current="page">Log Out</NavLink>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavBar