import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { UseDarkModeContextProvider } from './context/UseDarkModeContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UseDarkModeContextProvider>
      <App />
    </UseDarkModeContextProvider>
  </React.StrictMode>
);
