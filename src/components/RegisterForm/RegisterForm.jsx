import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';

import css from './RegisterForm.module.css';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  

  return (
    <form autoComplete="off" onSubmit={handleSubmit} className={css.form}>
      <div className={css.title}>Registration</div>
        <input className={css.input} type="text" name="name" placeholder='Username'/>

        <input className={css.input} type="email" name="email" placeholder='Email' />

        <input className={css.input} type="password" name="password" placeholder='Password'/>
        
      <button className={css.button} type="submit">Register</button>
    </form>
  );
};