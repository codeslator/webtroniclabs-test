import { FC, Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { routes } from '.';
import { PATH } from '../navigation';

const Router: FC = () => {
  const isAuthenticated = false;
  return (
    <BrowserRouter>
      <Routes>
        <Route path={PATH.ROOT} element={<Navigate to={isAuthenticated ? PATH.HOME : PATH.LOGIN} replace />} />
        {routes.map(({ Layout, path: root, children }) => (
          <Route element={<Layout />} path={root} key={root}>
            {children.map(({ Component, path }) => (
              <Route path={path} element={<Component />} key={path} />
            ))}
          </Route>
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;