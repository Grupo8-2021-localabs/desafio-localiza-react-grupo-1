import Head from 'next/head';
import Router from 'next/router';
import Register from '../src/templates/Register/Register';
import { useAuth } from '../src/components/AuthProvider';

export default function Index(): React.ReactElement {
  const { isLoggedIn } = useAuth();

  if (isLoggedIn()) {
    Router.push('/home');
  }

  return (
    <>
      <Head>
        <title>Cadastro</title>
      </Head>
      <Register />
    </>
  );
}
