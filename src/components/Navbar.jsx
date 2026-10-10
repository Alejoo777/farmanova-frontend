import { NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";

function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/" className="navbar__brand">
        <img src={logo} alt="Logo de FarmaNova" className="navbar__logo" />
        <div className="navbar__text">
          <span className="navbar__name">FarmaNova</span>
          <span className="navbar__slogan">Innovación que cuida tu salud</span>
        </div>
      </NavLink>

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
