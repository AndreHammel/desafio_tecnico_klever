import { Navigate, useRoutes } from 'react-router-dom';
import { AddToken } from '../pages/AddToken';
import { Home } from '../pages/Home';
import { NotFound } from '../pages/NotFound';
import { EditToken } from '../pages/EditToken';

export const MainRoutes = () =>
  useRoutes([
    { path: '/', element: <Navigate to="/home" /> },
    { path: '/home', element: <Home /> },
    { path: '/add-token', element: <AddToken /> },
    { path: '/edit-token', element: <EditToken /> },
    { path: '*', element: <NotFound /> },
  ]);
