import { createRoot } from 'react-dom/client'
import App from './App.jsx' 
import './styles/app.css'
import { AlertProvider } from './context/AlertContext.jsx'

createRoot(document.getElementById('root')).render(
  <AlertProvider>
    <App />
  </AlertProvider>
)
