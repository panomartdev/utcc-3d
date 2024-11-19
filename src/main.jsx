import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import BuildingFocusProvider from './context/buildingContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <BuildingFocusProvider>
          <App />
      </BuildingFocusProvider>
  </StrictMode>
)
