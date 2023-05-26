import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/operations';
import { useAuth } from '../../hooks/useAuth';
import css from './UserMenu.module.css';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div className={css.userMenu}>
      <p className={css.userName}>Welcome, {user.name}</p>
      <button type="button" className={css.button} onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </div>
  );
};