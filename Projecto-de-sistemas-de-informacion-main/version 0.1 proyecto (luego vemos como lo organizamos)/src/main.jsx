import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './iniciar_secion'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
