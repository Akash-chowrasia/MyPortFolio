import React, { lazy } from 'react';
import { Redirect } from 'react-router-dom';
import { TraverseRoutes } from '../../commons/components/traverse-routes';
import joinUrl from '../../commons/components/join-url';

const buildUrl = (endPoint) => joinUrl('/portfolio', endPoint);

const routes = [
  {
    path: buildUrl('/'),
    exact: true,
    component: () => <Redirect to={buildUrl('/home')} />,
  },

  {
    path: buildUrl('/home'),
    component: lazy(() => import('./pages/Home')),
  },

  {
    path: buildUrl('/about'),
    component: lazy(() => import('./pages/About')),
  },

  {
    path: buildUrl('/education'),
    component: lazy(() => import('./pages/Education')),
  },

  {
    path: buildUrl('/experience'),
    component: lazy(() => import('./pages/Experience')),
  },

  {
    path: buildUrl('/projects'),
    component: lazy(() => import('./pages/Projects')),
  },

  {
    path: buildUrl('/skills'),
    component: lazy(() => import('./pages/Skills')),
  },

  {
    path: buildUrl('/achievements'),
    component: lazy(() => import('./pages/Achievements')),
  },
];

const AuthModule = () => {
  return <TraverseRoutes routes={routes} />;
};
export default AuthModule;
