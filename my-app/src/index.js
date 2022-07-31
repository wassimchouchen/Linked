import { createRoot } from 'react-dom/client'
import React from 'react'
import './main.css'
import {  HelmetProvider } from 'react-helmet-async'
// import ReactDOM from "react-dom";
import './index.css';
import App from "./app";
import { BrowserRouter }from "react-router-dom";

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
      <App />
      </BrowserRouter>
     
    </HelmetProvider>
  </React.StrictMode>
)

// ReactDOM.render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>,
//   document.getElementById("root")
// );