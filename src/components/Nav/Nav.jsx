import { NavLink } from 'react-router-dom';
import s from './Nav.module.css';
export const Nav = () => {
  return (
    <nav>
      <ul>
        <li className={s.listItem}>
          <NavLink className={s.navLink} to="/drinks">
            Drinks
          </NavLink>
        </li>
        <li className={s.listItem}>
          <NavLink className={s.navLink} to="/add">
            Add recipes
          </NavLink>
        </li>
        <li className={s.listItem}>
          <NavLink className={s.navLink} to="/my">
            My recipes
          </NavLink>
        </li>
        <li className={s.listItem}>
          <NavLink className={s.navLink} to="/favorite">
            Favorites
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
