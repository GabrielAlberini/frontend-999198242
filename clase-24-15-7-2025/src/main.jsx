import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { TextInput } from './components/TextInput'
import { ColorInput } from './components/ColorInput'
import "./main.css"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ColorInput />
  </StrictMode>,
)