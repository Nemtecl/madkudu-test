import { CircularProgress } from '@mui/material';
import { Suspense, lazy } from 'react';
import { useRoutes } from 'react-router-dom';
import { Navigate } from 'react-router';

export const Loadable = (Component: any) => (props: any) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks

  return (
    <Suspense fallback={<CircularProgress />}>
      <Component {...props} />
    </Suspense>
  );
};

const Antelopes = Loadable(lazy(() => import('../pages/Antelopes')));
const Antelope = Loadable(lazy(() => import('../pages/Antelope')));
const Charts = Loadable(lazy(() => import('../pages/Charts')));
const Comparison = Loadable(lazy(() => import('../pages/Comparison')));
const NotFound = Loadable(lazy(() => import('../pages/NotFound')));

export default function Router() {
  return useRoutes([
    {
      path: 'antelopes',
      element: <Antelopes />,
    },
    {
      path: 'antelopes/:name',
      element: <Antelope />,
    },
    {
      path: 'charts',
      element: <Charts />,
    },
    {
      path: 'comparison',
      element: <Comparison />,
    },
    {
      path: '/',
      element: <Navigate to="/antelopes" replace />,
    },
    {
      path: '/404',
      element: <NotFound />,
    },
  ]);
}
