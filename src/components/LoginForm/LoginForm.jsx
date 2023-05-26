import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operations';

import css from './LoginForm.module.css';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form autoComplete="off" onSubmit={handleSubmit} className={css.form}>
      <div className={css.title}>Login</div>
        <input className={css.input} type="email" name="email" placeholder='Email' />

        <input className={css.input} type="password" name="password" placeholder='Password'/>
        
      <button className={css.button} type="submit">Log In</button>
    </form>
  );
};