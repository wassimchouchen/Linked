import { createRoot } from 'react-dom/client'
import App from './app'
import React from 'react'
import './main.css'
import {  HelmetProvider } from 'react-helmet-async'



createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </React.StrictMode>
)