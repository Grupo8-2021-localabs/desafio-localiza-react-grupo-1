import Head from 'next/head';
import CarsDetails from '../src/templates/CarsDetails/CarsDetails';

export default function Index() {
  return (
    <>
      <Head>
        <title>Detalhes Carro</title>
      </Head>
      <CarsDetails />
    </>
  );
}
