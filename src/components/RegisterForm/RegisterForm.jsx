import css from './RegisterForm.module.css';

export const RegisterForm = () => {
  return (
    <form autoComplete="off" className={css.form}>
      <div className={css.title}>Registration</div>
        <input className={css.input} type="text" name="name" placeholder='Username'/>

        <input className={css.input} type="email" name="email" placeholder='Email' />

        <input className={css.input} type="password" name="password" placeholder='Password'/>
        
      <button className={css.button} type="submit">Register</button>
    </form>
  );
};