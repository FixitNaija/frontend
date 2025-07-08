import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import './index.css'
import App from './App.jsx'

 const clientId = '520912190280-qrqi24j6n2mql9et0h5usdgt40370alg.apps.googleusercontent.com';


import { GoogleOAuthProvider } from '@react-oauth/google'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
  <GoogleOAuthProvider clientId= {clientId} >
      <App />
  </GoogleOAuthProvider>
    </BrowserRouter>
  </StrictMode>
)
