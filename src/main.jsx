import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// Change the destination 
import App from './Practise_Form'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
