import Head from 'next/head';
import Register from '../src/templates/Register/Register';

export default function Index() {
  return (
    <>
      <Head>
        <title>Cadastro</title>
      </Head>
      <Register />
    </>
  );
}
