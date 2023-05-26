import css from './LoginForm.module.css';

export const LoginForm = () => {
  return (
    <form autoComplete="off" className={css.form}>
      <div className={css.title}>Login</div>
        <input className={css.input} type="email" name="email" placeholder='Email' />

        <input className={css.input} type="password" name="password" placeholder='Password'/>
        
      <button className={css.button} type="submit">Log In</button>
    </form>
  );
};