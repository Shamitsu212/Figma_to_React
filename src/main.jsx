import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './assets/GlobalStyles/index.css'
import './assets/GlobalStyles/remove.css'
import './assets/GlobalStyles/fonts.css'

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
