import Head from 'next/head';
import SchedulingCars from '../src/templates/SchedulingCars/SchedulingCars';

export default function Index(): React.ReactNode {
  return (
    <>
      <Head>
        <title>Agendamentos</title>
      </Head>
      <SchedulingCars />
    </>
  );
}
