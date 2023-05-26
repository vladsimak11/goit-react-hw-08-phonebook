import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';


export const Navigation = () => {
  return (
    <nav className={css.navigation}>
      <NavLink className={css.linkNavigation} to="/">
        Home
      </NavLink>

      <NavLink className={css.linkNavigation} to="/contacts">
        Contacts
      </NavLink>
    </nav>
  );
};