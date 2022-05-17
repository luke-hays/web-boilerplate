import React from 'react';
import ReactDOM from 'react-dom/client';

import AppRoutes from 'AppRoutes';

import './styles/main.css';

const container = document.getElementById('root') as HTMLElement;

const root = ReactDOM.createRoot(container);

root.render(
  <React.StrictMode>
    <AppRoutes />
  </React.StrictMode>
);
