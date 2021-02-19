import Head from 'next/head';
import ConfirmationAluguel from '../src/templates/Confirmation/ConfirmationAluguel';

export default function Index() {
  return (
    <>
      <Head>
        <title>Confirmacao Aluguel</title>
      </Head>
      <ConfirmationAluguel />
    </>
  );
}
