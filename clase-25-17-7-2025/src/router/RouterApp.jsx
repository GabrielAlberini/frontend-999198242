import { BrowserRouter, Routes, Route } from "react-router-dom"
import { ColorInput } from "../components/ColorInput"
import { EmotionInput } from "../components/EmotionInput"
import { TextInput } from "../components/TextInput"
import { Home } from "../components/Home"
import { NotFound } from "../components/NotFound"

// 1. BrowserRouter habilita el historial de navegación del navegador, (posibilidad de leer el path de una URL).
// 2. Routes es quien contiene el conjunto de rutas.
// 3. Route define la ruta (path='/') exacta de un componente (element={<Componente />}).
// 4. Importar en el main.jsx el enrutado <RouterApp />

const RouterApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/color" element={<ColorInput />} />
        <Route path="/emotion" element={<EmotionInput />} />
        <Route path="/text" element={<TextInput />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export { RouterApp }