import { FC, Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { routes } from '.';
import { useAuth } from '../../hooks';
import { PATH, ROUTES } from '../navigation';

export const Router: FC = () => {
  const { isAuthenticated } = useAuth(); 
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={PATH.ROOT}
          element={<Navigate to={(isAuthenticated && Boolean(sessionStorage.getItem('username'))) ? ROUTES.TODOS : ROUTES.HOME} replace />}
        />
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