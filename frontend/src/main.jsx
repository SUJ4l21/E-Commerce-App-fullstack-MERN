import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import ScontextProvider from './context/Scontext.jsx'




createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ScontextProvider>
      <App/>
    </ScontextProvider>
  </BrowserRouter>,
)
