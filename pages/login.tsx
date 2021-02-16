import Head from 'next/head';
import Router from 'next/router';
import Login from '../src/templates/Login/Login';
import { useAuth } from '../src/components/AuthProvider';

export default function Index() : React.ReactNode {
  const { authState } = useAuth();

  if (authState.token && authState.userId) {
    Router.push('/');
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
