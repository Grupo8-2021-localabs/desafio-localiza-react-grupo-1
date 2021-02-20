import Head from 'next/head';
import { useRouter } from 'next/router';
import { GetServerSideProps } from 'next';
import { useEffect } from 'react';
import SchedulingCars from '../../src/templates/SchedulingCars/SchedulingCars';
import { useAuth } from '../../src/components/AuthProvider';
import { loadAppointmentList } from '../../src/services/api';
import { IAppAppointment } from '../../src/services/types';

interface IProps {
  appointments: IAppAppointment[];
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const {
    params: { cpf },
    query: { token },
  } = context;
  const emptyProps = {
    props: { appointments: [] },
  };

  if (Array.isArray(cpf) || !token || Array.isArray(token)) {
    return emptyProps;
  }

  try {
    const appointments = await loadAppointmentList(cpf, token);
    return {
      props: {
        appointments,
      },
    };
  } catch {
    return emptyProps;
  }
};

export default function AppointmentsPage({ appointments }: IProps): React.ReactNode {
  const router = useRouter();
  const { cpf } = router.query;
  const { authState, isLoggedIn } = useAuth();

  useEffect(() => {
    if (authState.checked) {
      if (!isLoggedIn()) {
        router.push('/login');
      }
      if (cpf !== authState.userCpf || appointments.length === 0) {
        router.push('/home');
      }
    }
  }, [authState, appointments]);

  if (!authState.checked) {
    return 'Loading...';
  }

  return (
    <>
      <Head>
        <title>Agendamentos</title>
      </Head>
      <SchedulingCars appointments={appointments} />
    </>
  );
}
