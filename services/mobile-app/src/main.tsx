import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { initializeStatusBar } from './capacitor/statusBar'

// Initialize Capacitor plugins
document.addEventListener('DOMContentLoaded', () => {
  initializeStatusBar();
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <App />
  </StrictMode>,
)
