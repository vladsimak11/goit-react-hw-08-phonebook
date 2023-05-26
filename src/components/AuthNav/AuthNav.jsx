import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';

export const AuthNav = () => {
  return (
    <div className={css.authNav}>
      <NavLink className={css.linkAuthNav} to="/register">
        Register
      </NavLink>
      <NavLink className={css.linkAuthNav} to='/login'>
        Log In
      </NavLink>
    </div>
  );
};
