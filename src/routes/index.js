import { useRoutes } from 'react-router-dom';
// layouts
//
import LoginPage from '../pages/LoginPage';
import Page404 from '../pages/Page404';
import { storageGetItem } from '../service/ash_mlm';
import HomePage from '../pages/HomePage';

// ----------------------------------------------------------------------

export default function Router() {
  const token = storageGetItem('token');

  const routes = useRoutes([
    {
      path: '/login',
      element: <LoginPage />,
    },
    {
      path: '/',
      element: <HomePage />
    },
    {
      path: '*',
      element: <Page404 /> ,
    },
  ]);

  return routes;
}
