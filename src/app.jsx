import { BrowserRouter, Redirect } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';
import { MuiThemeProvider } from '@material-ui/core';
import { LoadingIndicator } from './commons/components/loading-indicator';
import { TraverseRoutes } from './commons/components/traverse-routes';
import { theme } from './commons/theme';
import NavigationBar from './modules/portfolio/components/NavigationBar';
import Footer from './modules/portfolio/components/Footer';

const routes = [
  {
    path: '/',
    exact: true,
    render: () => <Redirect to="/portfolio" />,
  },

  {
    path: '/portfolio',
    component: lazy(() => import('./modules/portfolio')),
  },
];

export default function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <Suspense fallback={<LoadingIndicator when />}>
        <NavigationBar />
        <BrowserRouter>
          <TraverseRoutes routes={routes} />
        </BrowserRouter>
        <Footer />
      </Suspense>
    </MuiThemeProvider>
  );
}
