import React from 'react';
import { hot } from 'react-hot-loader';
import AppRoutes from './routes';

function App() {
  return (
    <>
      <AppRoutes />
    </>
  );
}

export default hot(module)(App);
