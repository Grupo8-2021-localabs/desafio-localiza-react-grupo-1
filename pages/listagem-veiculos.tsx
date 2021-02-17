import Head from 'next/head';
import ListCars from '../src/templates/ListCars/ListCars';

export default function Index(): React.ReactNode {
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <ListCars />
    </>
  );
}
