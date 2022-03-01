import './Navigation.css';
import { NavLink } from 'react-router-dom';

export default function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink className="link" to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className="link" to="/about">
            About
          </NavLink>
        </li>
        <li>
          <NavLink className="link" to="info">
            Info
          </NavLink>
        </li>
        <li>
          <NavLink className="link" to="gallery">
            Dogs Gallery
          </NavLink>
        </li>
        <li>
          <NavLink className="link" to="breeds">
            Choose Dog breed
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
