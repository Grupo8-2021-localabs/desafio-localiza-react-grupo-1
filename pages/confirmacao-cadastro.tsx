import Head from 'next/head';
import RegisterConfirmation from '../src/templates/Register/RegisterConfirmation/RegisterConfirmation';

export default function Index() {
  return (
    <>
      <Head>
        <title>Confirmacao Cadastro</title>
      </Head>
      <RegisterConfirmation />
    </>
  );
}
