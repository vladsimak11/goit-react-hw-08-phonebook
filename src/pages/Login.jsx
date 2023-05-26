import { Helmet } from 'react-helmet';
import { LoginForm } from '../components/LoginForm/LoginForm';

const css = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: '80px',
  },
};

export default function Login() {
  return (
    <div style={css.container}>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <LoginForm />
    </div>
  );
}