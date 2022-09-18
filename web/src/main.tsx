import React from 'react';
import ReactDOM from 'react-dom/client';
import { AppRoutes } from './routes/app.routes';
import 'react-toastify/dist/ReactToastify.css';
import './styles/globals.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AppRoutes />
  </React.StrictMode>
);
