import Head from 'next/head';
import Router from 'next/router';
import Register from '../src/templates/Register/Register';
import { useAuth } from '../src/components/AuthProvider';


export default function Index() : React.ReactElement {
  const { authState } = useAuth();

  if (authState.token && authState.userId) {
    Router.push('/');
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
