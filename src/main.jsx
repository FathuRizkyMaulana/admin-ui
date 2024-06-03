import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { DarkModeContextProvider } from './context/darkModeContext.jsx';
import { AuthContextProvider } from './context/AuthContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DarkModeContextProvider>
     <AuthContextProvider>
      <App />
     </AuthContextProvider>
    </DarkModeContextProvider>
  </React.StrictMode>,
);
