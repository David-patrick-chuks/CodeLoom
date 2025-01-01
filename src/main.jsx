import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { NextUIProvider } from "@nextui-org/react";
import { ToastContainer } from 'react-toastify';
import './index.css';
import 'react-toastify/dist/ReactToastify.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NextUIProvider>
      <App />
      <ToastContainer />
    </NextUIProvider>
  </StrictMode>,
)
