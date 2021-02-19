import Head from 'next/head';
import ConfirmationRent from '../src/templates/Confirmation/ConfirmationRent';

export default function Index() : React.ReactElement {
  return (
    <>
      <Head>
        <title>Confirmação Aluguel</title>
      </Head>
      <ConfirmationRent />
    </>
  );
}
