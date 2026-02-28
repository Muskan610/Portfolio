import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/styles/index.css'
import App from './App.jsx'
import { MousePositionProvider } from './contexts/MousePositionContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MousePositionProvider>
      <App />
    </MousePositionProvider>
  </StrictMode>,
)
