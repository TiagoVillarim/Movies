import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import indexCss from "../src/index.css"
import { UserProvider } from './context/contextAPI';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserProvider>
      <App />
    </UserProvider>
  </React.StrictMode>
);

