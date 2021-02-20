import Head from 'next/head';
import Router from 'next/router';
import Login from '../src/templates/Login/Login';
import { useAuth } from '../src/components/AuthProvider';

export default function Index(): React.ReactNode {
  const { isLoggedIn } = useAuth();

  if (isLoggedIn()) {
    Router.push('/home');
  }

  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <Login />
    </>
  );
}
