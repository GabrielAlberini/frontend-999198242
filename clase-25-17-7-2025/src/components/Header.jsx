import { useState } from "react"
import { Link } from "react-router-dom"

const Header = () => {
  const [user, setUser] = useState({ role: "user" })

  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/color">Color</Link></li>
          <li><Link to="/emotion">Emoción</Link></li>
          <li><Link to="/text">Texto</Link></li>
          {
            user.role === "admin" && <li><Link to="/admin">PAGINA PARA ADMINISTRADOR</Link></li>
          }
        </ul>
      </nav>
    </header>
  )
}

export { Header }