import { Helmet } from 'react-helmet';

const css = {
  container: {
    minHeight: 'calc(100vh - 50px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 700,
    fontSize: 48,
    textAlign: 'center',
    color: '#2EE59D',
    backgroundColor: 'white',
    padding: '20px',
  },
};

export default function Home() {
  return (
    <div style={css.container}>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <h1 style={css.title}>
        Welcome to your phone book
      </h1>
    </div>
  );
}