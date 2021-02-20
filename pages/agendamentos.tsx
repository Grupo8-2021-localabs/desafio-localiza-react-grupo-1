import Head from 'next/head';
import Router from 'next/router';
import SchedulingCars from '../src/templates/SchedulingCars/SchedulingCars';
import { useAuth } from '../src/components/AuthProvider';


export default function Index(): React.ReactNode {
  const { isLoggedIn } = useAuth();

  if (!isLoggedIn()) {
    Router.push('/login');
  }

  return (
    <>
      <Head>
        <title>Agendamentos</title>
      </Head>
      <SchedulingCars />
    </>
  );
}
