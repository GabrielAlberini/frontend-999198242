import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Header } from './components/Header.jsx'
import { Home } from './views/Home.jsx'
import { Footer } from './components/Footer.jsx'
import { Dashboard } from './views/Dashboard.jsx'
import "./index.css"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Home />
    <Footer />
  </StrictMode>,
)
