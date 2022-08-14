import { FC } from 'react'
import { Outlet } from 'react-router-dom';

const TestLayout: FC = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default TestLayout;