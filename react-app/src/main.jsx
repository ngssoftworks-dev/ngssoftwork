import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './style.css' // Import existing global styles

const getBasename = () => {
  if (window.location.hostname.includes('github.io')) {
    return '/ngssoftwork/';
  }
  return '/'; // For Vercel, localhost, or custom domain
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter 
      basename={getBasename()}
      future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
    >
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)

