import css from './UserMenu.module.css';

export const UserMenu = () => {
  return (
    <div className={css.userMenu}>
      <p className={css.userName}>Welcome, Vlad</p>
      <button type="button" className={css.button}>
        Logout
      </button>
    </div>
  );
};