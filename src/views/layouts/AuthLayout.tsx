import { FC } from 'react';
import { Outlet } from 'react-router-dom';

const MainLayout: FC = () => {
  return (
    <div className="h-screen flex flex-rows justify-between">
      <div className="hidden md:block md:w-6/12 bg-gray-900"></div>
      <main className="w-full md:w-6/12 my-auto">
        <Outlet />
      </main>
    </div>
  )
}

export default MainLayout