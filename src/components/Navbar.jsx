import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <span className="navbar__brand">FarmaNova</span>

      <ul className="navbar__links">
        <li>
          <NavLink to="/" end>
            Inicio
          </NavLink>
        </li>
        <li>
          <NavLink to="/pedido">Hacer pedido</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
