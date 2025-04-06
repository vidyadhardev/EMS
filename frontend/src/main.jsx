import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AuthContext from './Context/authContext.jsx'

createRoot(document.getElementById('root')).render(
  <AuthContext>
    <App />
  </AuthContext>,
)
