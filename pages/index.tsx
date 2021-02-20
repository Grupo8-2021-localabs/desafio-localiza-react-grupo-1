import Head from 'next/head';
import ChooseDate from '../src/templates/ChooseDate/ChooseDate';

export default function Index(): React.ReactElement {
  return (
    <>
      <Head>
        <title>Escolha a Data</title>
      </Head>
      <ChooseDate />
    </>
  );
}
